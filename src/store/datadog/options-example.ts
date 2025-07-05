const options = {
    applicationId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    clientToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    site: 'datadoghq.com',
    service: 'webshop',
    env: 'development',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    // trackResources: true,
    // trackLongTasks: true,
    // trackUserInteractions: true,
    allowedTracingUrls: [
        'http://localhost:3000',
    ],
};
export default options;
