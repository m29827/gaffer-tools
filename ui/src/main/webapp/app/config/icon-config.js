/*
 * Copyright 2017 Crown Copyright
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

angular.module('app').config(['$mdIconProvider', function($mdIconProvider) {

    $mdIconProvider
        .icon('save', 'app/img/save.svg')
        .icon('info', 'app/img/info.svg')
        .icon('up-arrow', 'app/img/up-arrow.svg')
        .icon('down-arrow', 'app/img/down-arrow.svg')
        .icon('refresh', 'app/img/refresh.svg')
        .icon('send', 'app/img/send.svg');
}]);