// import { BrowserAgent } from '@newrelic/browser-agent';
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
import options from './options';

export default function NewRelicAgent() {
    const agent:BrowserAgent = new BrowserAgent({...options});
    return agent;
}
