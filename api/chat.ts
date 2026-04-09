import { HashbrownAnthropic } from '@hashbrownai/anthropic';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const stream = HashbrownAnthropic.stream.text({
    apiKey: process.env['ANTHROPIC_API_KEY']!,
    request: req.body,
  });

  res.setHeader('Content-Type', 'application/octet-stream');

  for await (const chunk of stream) {
    res.write(chunk);
  }

  res.end();
}
