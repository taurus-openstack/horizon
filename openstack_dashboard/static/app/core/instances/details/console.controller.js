/*
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  "use strict";

  angular
    .module('horizon.app.core.instances')
    .controller('ServerConsoleController', controller);

  controller.$inject = [
    'horizon.app.core.instances.resourceType',
    'horizon.framework.conf.resource-type-registry.service',
    '$scope'
  ];

  function controller(
    resourceTypeCode,
    registry,
    $scope
  ) {
    var ctrl = this;

    ctrl.server = {};
    ctrl.resourceType = registry.getResourceType(resourceTypeCode);

    $scope.descriptor.loadPromise.then(onGetResponse);

    function onGetResponse(response) {
      ctrl.server = response.data;
    }
  }

})();