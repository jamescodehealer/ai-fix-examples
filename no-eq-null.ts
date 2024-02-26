function init(address: string, options: { hot?: boolean, latency?: number } | null | undefined) {
    let hot = false;
    let latency = 100;
    if (options != null) {
        hot = options.hot != null ? options.hot : hot;
        latency = options.latency != null ? options.latency : latency;
    }
    // TODO: Finish
    return address

}