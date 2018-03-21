// ==UserScript==
// @id             iitc-plugin-basemap-usgs
// @name           IITC plugin: Map layers from USGS
// @category       Map Tiles
// @version        0.1.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Add the USGS Topo map from nationalmap.gov
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////


// use own namespace for plugin
window.plugin.mapTileUSGS = function() {};

function setup() {
  var usgsAttr = 'Data available from U.S. Geological Survey, National Geospatial Program';
  var usgsTopoUrl = 'https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}';
  var mapLayer = L.tileLayer(usgsTopoUrl, {
    attribution:usgsAttr,
    maxZoom:21,
    maxNativeZoom:16
  });
  window.layerChooser.addBaseLayer(mapLayer, 'USGS Topo');
}

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
