<?php

require_once 'model/autoload.php';
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/project/:projectid', function ($id) {
    echo "Asking or a particular project $id";
    $project = new FakeSingleProject();
    $myStringJSON = $project->toJSON();
    echo $myStringJSON;
});


$app->get('/projects', function () {
    echo "Asking for the projects";
    $portfolio = new FakePortfolio();
    echo $portfolio->toJSON();
});


$app->get('/', function () {
    echo "Please specify a resource URL";
});

$app->run();
