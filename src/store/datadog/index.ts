import { datadogRum, RumInitConfiguration } from '@datadog/browser-rum';
import options from './options';

export default function DataDogAgent() {
  datadogRum.init(options as RumInitConfiguration);
  datadogRum.startSessionReplayRecording();
  return datadogRum;
}