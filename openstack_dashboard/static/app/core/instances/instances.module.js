/**
 * (c) Copyright 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @ngname horizon.app.core.instances
   *
   * @description
   * Provides all of the services and widgets required
   * to support and display instances related content.
   */
  angular
    .module('horizon.app.core.instances', ['ngRoute',
      'horizon.app.core.instances.actions', 'horizon.app.core.instances.details'])
    .constant('horizon.app.core.instances.resourceType', 'OS::Nova::Server')
    .config(config)
    .run(registerInstanceType);

  config.$inject = [ '$provide', '$windowProvider' ];

  function config($provide, $windowProvider) {
    var path = $windowProvider.$get().STATIC_URL + 'app/core/instances/';
    $provide.constant('horizon.app.core.instances.basePath', path);
  }

  registerInstanceType.$inject = [
    'horizon.framework.conf.resource-type-registry.service',
    'horizon.app.core.instances.resourceType'
  ];

  function registerInstanceType(registry, instanceResourceType) {
    registry.getResourceType(instanceResourceType, {
      names: [gettext('Server'), gettext('Servers')]
    });
  }

})();
