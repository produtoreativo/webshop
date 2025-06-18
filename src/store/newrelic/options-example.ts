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
        accountID:"3686419",
        trustKey:"3686419",
        agentID:"1134593260",
        licenseKey:"NRJS-57562e87344ae17b0e2",
        applicationID:"1134593260"
    }
};

export default options;

