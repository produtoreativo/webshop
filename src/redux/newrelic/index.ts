// import { BrowserAgent } from '@newrelic/browser-agent';
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';
// import { Logging } from '@newrelic/browser-agent/features/logging';
import options from './options';

export default function NewRelicAgent() {
    const agent:BrowserAgent = new BrowserAgent({
        ...options,
        // features: [
        //     Logging,
        // ],
    });
    // agent.wrapLogger(console, 'log');
    return agent;
}
