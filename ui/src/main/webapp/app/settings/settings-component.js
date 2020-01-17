/*
 * Copyright 2017-2019 Crown Copyright
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

'use strict';

angular.module('app').component('settingsView', settingsView())

function settingsView() {

    return {
        templateUrl: 'app/settings/settings.html',
        controller: SettingsController,
        controllerAs: 'ctrl'
    }
}

function SettingsController(settings, schema, operationService, events, config) {
    var vm = this;

    vm.vertexColours = settings.vertexColours;
    vm.vertexShapes = settings.vertexShapes;
    vm.defaultShape = settings.defaultShape;
    vm.defaultColour = settings.defaultColour;

    vm.saveClearChainAfterExecution = function() {
        settings.setClearChainAfterExecution(vm.clearChainAfterExecution);
    }

    vm.$onInit = function() {
        vm.showOptions = false;
        vm.resultLimit = settings.getResultLimit();
        vm.clearChainAfterExecution = settings.getClearChainAfterExecution();
        vm.customVertexLabels = settings.getCustomVertexLabels();
        config.get().then(function(conf) {
            vm.showOptions = (conf.operationOptions !== undefined || conf.operationOptionKeys !== undefined);
        });
    }

    vm.updateResultLimit = function() {
        if (vm.querySettingsForm.resultLimit.$valid) {
            settings.setResultLimit(vm.resultLimit);
        }
    }

    vm.addCustomVertexLabel = function() {
        var newLabel = {
           "label": "Custom Label",
           "vertex": "vertex value",
           "shape": defaultShape,
           "colour": defaultColour,
           "id": String(new Date().getTime()) + Math.random(),
           "timestamp": String(new Date().getTime())
        };
        vm.customVertexLabels.unshift(newLabel);
        settings.setCustomVertexLabels(vm.customVertexLabels);
    }

    vm.deleteCustomVertexLabel = function(id) {
        for( var i = 0; i < vm.customVertexLabels.length; i++){
            if (vm.customVertexLabels[i].id === id) {
              vm.customVertexLabels.splice(i, 1);
            }
        }
        settings.setCustomVertexLabels(vm.customVertexLabels);
    }

    vm.saveCustomVertexLabel = function(saveCustomLabel) {
        saveCustomLabel.labelEdit = false;
        saveCustomLabel.vertexEdit = false;
        settings.setCustomVertexLabels(vm.customVertexLabels);
    }

    vm.updateSchema = function() {
        events.broadcast('onPreExecute', []);
        schema.update();
        operationService.reloadOperations(true);
    }

    vm.getCacheTtlMessage = function() {
        var ttl = settings.getTimeToLiveInDays();
        if(ttl > 0) {
            var msg = "These settings will be cached for ";
            if(ttl > 1) {
                return msg + ttl + " days.";
            }
            return msg + "1 day.";
        }

        return "";
    }
}
