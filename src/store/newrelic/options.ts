const options = {
    init: {
        distributed_tracing:{
            enabled:true,
            cors_use_newrelic_header:true,
            cors_use_tracecontext_headers:true,
            allowed_origins:['http://localhost:5173','http://localhost:3000','http://localhost:3001','http://localhost:3100']
        },
        privacy: { cookies_enabled: true },
        ajax: { 
            deny_list: [
                "bam.nr-data.net", 
            ], 
        },
        session_replay:{
            enabled:true,
            block_selector:'',
            mask_text_selector:'*',
            sampling_rate:10.0,
            error_sampling_rate:100.0,
            mask_all_inputs:true,
            collect_fonts:true,
            inline_images:false,
            inline_stylesheet:true,
            fix_stylesheets:true,
            preload:false,
            mask_input_options:{}
        },
    },
    info: {
        beacon: "bam.nr-data.net",
        errorBeacon: "bam.nr-data.net",
        licenseKey: "NRJS-57562e87344ae17b0e2",
        applicationID: "1134593260",
        sa: 1,
    },
    loader_config: {
        accountID:"3686419",
        trustKey:"3686419",
        agentID:"1134593260",
        licenseKey:"NRJS-57562e87344ae17b0e2",
        applicationID:"1134593260"
    },
};

export default options;
