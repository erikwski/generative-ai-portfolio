import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const client = new Anthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { systemPrompt } = req.body as { systemPrompt: string };

  if (!systemPrompt) {
    return res.status(400).json({ error: 'Missing systemPrompt' });
  }

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: 'Generate the page layout JSON for this visitor.',
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      return res.status(500).json({ error: 'Unexpected response type' });
    }

    // Extract JSON from the response (Claude may wrap it in markdown)
    const raw = content.text.trim();
    const jsonMatch = raw.match(/```(?:json)?\s*([\s\S]*?)```/) ?? [null, raw];
    const jsonString = jsonMatch[1] ?? raw;

    const layout = JSON.parse(jsonString);
    return res.status(200).json({ layout });
  } catch (error) {
    console.error('Anthropic API error:', error);
    return res.status(500).json({ error: 'Failed to generate layout' });
  }
}
