ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BreakwaterintegratedWECs_2 = new ol.format.GeoJSON();
var features_BreakwaterintegratedWECs_2 = format_BreakwaterintegratedWECs_2.readFeatures(json_BreakwaterintegratedWECs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BreakwaterintegratedWECs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BreakwaterintegratedWECs_2.addFeatures(features_BreakwaterintegratedWECs_2);
var lyr_BreakwaterintegratedWECs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BreakwaterintegratedWECs_2, 
                style: style_BreakwaterintegratedWECs_2,
                popuplayertitle: "Breakwater-integrated WECs",
                interactive: true,
    title: 'Breakwater-integrated WECs<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_0.png" /> Multi-reservoir OTD<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_1.png" /> Multi-reservoir OTD, OWC<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_2.png" /> Multiple oscillating bodies<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_3.png" /> OWC<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_4.png" /> Single-reservoir OTD<br />\
    <img src="styles/legend/BreakwaterintegratedWECs_2_5.png" /> <br />'
        });

lyr_ESRIOcean_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_BreakwaterintegratedWECs_2.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_ESRIBoundariesPlaces_1,lyr_BreakwaterintegratedWECs_2];
lyr_BreakwaterintegratedWECs_2.set('fieldAliases', {'Year of installation': 'Year of installation', 'Name': 'Name', 'Concept': 'Concept', 'Location': 'Location', 'Type of breakwater': 'Type of breakwater', 'Phase': 'Phase', 'Injecting(/ed) electricity in grid': 'Injecting(/ed) electricity in grid', 'Installed capacity (kW)': 'Installed capacity (kW)', 'Relevant papers': 'Relevant papers', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Comments': 'Comments', 'Figure': 'Figure', });
lyr_BreakwaterintegratedWECs_2.set('fieldImages', {'Year of installation': 'Range', 'Name': 'TextEdit', 'Concept': 'TextEdit', 'Location': 'TextEdit', 'Type of breakwater': 'TextEdit', 'Phase': 'TextEdit', 'Injecting(/ed) electricity in grid': 'TextEdit', 'Installed capacity (kW)': 'Range', 'Relevant papers': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Comments': 'TextEdit', 'Figure': 'ExternalResource', });
lyr_BreakwaterintegratedWECs_2.set('fieldLabels', {'Year of installation': 'header label - always visible', 'Name': 'header label - always visible', 'Concept': 'header label - always visible', 'Location': 'header label - always visible', 'Type of breakwater': 'header label - always visible', 'Phase': 'header label - always visible', 'Injecting(/ed) electricity in grid': 'no label', 'Installed capacity (kW)': 'header label - always visible', 'Relevant papers': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Comments': 'header label - always visible', 'Figure': 'header label - always visible', });
lyr_BreakwaterintegratedWECs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});