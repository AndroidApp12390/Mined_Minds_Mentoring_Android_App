define(['require'], function(require) {
    /**
     * Routing configuration generated by Appery.io
     */

    /**
     * Default route
     * @type {{redirectTo: string}}
     */
    var default_route = {
        redirectTo: '/Home.html'
    };

/**
     * Routing configuration object
     * @property {object} default                               - Default routing configuration
     * @property {string} default.redirectTo                    - Default routing URL
     * @property {object} when                                  - Routing configuration for different URLs
     * @property {object} when./                                - Routing configuration for "/" URL
     * @property {string} when./.redirectTo                     - Redirect to default routing URL
     * @property {object} when["/Home.html"]    - Routing configuration for /Home.html URL
     * @property {string} when["/Home.html"].c  - Controller for /Home.html URL
     * @property {string} when["/Home.html"].t  - Template for /Home.html URL
     * @property {string[]} when["/Home.html"].d  - Dependencies for /Home.html URL
     * @property {object} when["/Profile.html"]    - Routing configuration for /Profile.html URL
     * @property {string} when["/Profile.html"].c  - Controller for /Profile.html URL
     * @property {string} when["/Profile.html"].t  - Template for /Profile.html URL
     * @property {string[]} when["/Profile.html"].d  - Dependencies for /Profile.html URL
     * @property {object} when["/Info.html"]    - Routing configuration for /Info.html URL
     * @property {string} when["/Info.html"].c  - Controller for /Info.html URL
     * @property {string} when["/Info.html"].t  - Template for /Info.html URL
     * @property {string[]} when["/Info.html"].d  - Dependencies for /Info.html URL

     * @property {object} otherwise                             - Routing configuration for another URL
     * @property {object} otherwise.redirectTo                  - Redirect to default routing URL
     * @property {object} route_names                           - Route aliases
     * @property {string} route_names.["Home"]  - "Home" is an alias for "/Home.html" routing
     * @property {string} route_names.["Profile"]  - "Profile" is an alias for "/Profile.html" routing
     * @property {string} route_names.["Info"]  - "Info" is an alias for "/Info.html" routing

     */
    return {
    default:
        default_route, when: {
            '/': default_route,
            '/Home.html': {
                c: '$Home/HomeController',
                t: '$Home/HomeTemplate.html',
                d: []
            },
            '/Profile.html': {
                c: '$Profile/ProfileController',
                t: '$Profile/ProfileTemplate.html',
                d: []
            },
            '/Info.html': {
                c: '$Info/InfoController',
                t: '$Info/InfoTemplate.html',
                d: []
            }

        },
        otherwise: default_route,
        route_names: {
            'Home': '/Home.html',
            'Profile': '/Profile.html',
            'Info': '/Info.html'

        }
    };
});