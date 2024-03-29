const CacheWarmerInterface = Jymfony.Component.Kernel.CacheWarmer.CacheWarmerInterface;

/**
 * Generates the router matcher and generator classes.
 *
 * @final
 *
 * @memberOf Jymfony.Bundle.FrameworkBundle.CacheWarmer
 */
export default class RouterCacheWarmer extends implementationOf(CacheWarmerInterface) {
    /**
     * As this cache warmer is optional, dependencies should be lazy-loaded, that's why a container should be injected.
     *
     * @type {Jymfony.Contracts.DependencyInjection.ContainerInterface}
     *
     * @private
     */
    _container;

    /**
     * Constructor
     *
     * @param {Jymfony.Contracts.DependencyInjection.ContainerInterface} container
     */
    __construct(container) {
        this._container = container;
    }

    /**
     * Warms up the cache.
     *
     * @param {string} cacheDir The cache directory
     */
    async warmUp(cacheDir) {
        const router = this._container.get('router');
        await router.warmUp(cacheDir);
    }

    /**
     * Checks whether this warmer is optional or not.
     *
     * @returns {boolean} always true
     */
    get optional() {
        return true;
    }
}
