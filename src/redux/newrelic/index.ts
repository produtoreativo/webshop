import { BrowserAgent } from '@newrelic/browser-agent';
import options from './options';

export default function NewRelicAgent() {
    const agent = new BrowserAgent(options);
    return agent;
}
