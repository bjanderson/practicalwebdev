#!/bin/bash

#this is intended to be used in a test project that imports these schematics
#npm i -D @practicalwebdev/schematics@latest

rm -rf src/app/{components,models,services,store}

ng generate @practicalwebdev/schematics:model --name test-model
ng generate @practicalwebdev/schematics:model -n test-model1

ng generate @practicalwebdev/schematics:component --name test-component
ng generate @practicalwebdev/schematics:component -n test-component-m -m
ng generate @practicalwebdev/schematics:component -n test-component-r -r
ng generate @practicalwebdev/schematics:component -n test-component-p -p testprefix

ng generate @practicalwebdev/schematics:service --name test-service
ng generate @practicalwebdev/schematics:service -n test-service1

ng generate @practicalwebdev/schematics:store --name test-store
ng generate @practicalwebdev/schematics:store -n test-store1
