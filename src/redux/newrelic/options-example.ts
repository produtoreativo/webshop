const options = {
    init: {
        distributed_tracing: { enabled: true },
        privacy: { cookies_enabled: true },
        ajax: { deny_list: ["bam.nr-data.net"] },
    },
    info: {
        beacon: "bam.nr-data.net",
        errorBeacon: "bam.nr-data.net",
        licenseKey: "NRJS-1234567890",
        applicationID: "1234567890",
        sa: 1,
    },
    loader_config: {
        accountID: "1234567",
        trustKey: "1234567",
        agentID: "1234567890",
        licenseKey: "NRJS-1234567890",
        applicationID: "1234567890",
    }
};

export default options;