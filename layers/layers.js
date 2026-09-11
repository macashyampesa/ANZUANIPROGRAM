var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ANZUAN2MAP_1 = new ol.format.GeoJSON();
var features_ANZUAN2MAP_1 = format_ANZUAN2MAP_1.readFeatures(json_ANZUAN2MAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZUAN2MAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZUAN2MAP_1.addFeatures(features_ANZUAN2MAP_1);
var lyr_ANZUAN2MAP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZUAN2MAP_1, 
                style: style_ANZUAN2MAP_1,
                popuplayertitle: 'ANZUAN2MAP',
                interactive: true,
                title: '<img src="styles/legend/ANZUAN2MAP_1.png" /> ANZUAN2MAP'
            });
var format_ANZUAN_2 = new ol.format.GeoJSON();
var features_ANZUAN_2 = format_ANZUAN_2.readFeatures(json_ANZUAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZUAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZUAN_2.addFeatures(features_ANZUAN_2);
var lyr_ANZUAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZUAN_2, 
                style: style_ANZUAN_2,
                popuplayertitle: 'ANZUAN',
                interactive: true,
                title: '<img src="styles/legend/ANZUAN_2.png" /> ANZUAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ANZUAN2MAP_1.setVisible(true);lyr_ANZUAN_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ANZUAN2MAP_1,lyr_ANZUAN_2];
lyr_ANZUAN2MAP_1.set('fieldAliases', {'plot_n': 'plot_n', 'with_id_Pa': 'with_id_Pa', 'with_id_ID': 'with_id_ID', 'CORRECT': 'CORRECT', 'REMARKS': 'REMARKS', });
lyr_ANZUAN_2.set('fieldAliases', {'plot_n': 'plot_n', 'with_id_Pa': 'with_id_Pa', 'with_id_ID': 'with_id_ID', 'CORRECT': 'CORRECT', 'REMARKS': 'REMARKS', });
lyr_ANZUAN2MAP_1.set('fieldImages', {'plot_n': 'Range', 'with_id_Pa': 'TextEdit', 'with_id_ID': 'TextEdit', 'CORRECT': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_ANZUAN_2.set('fieldImages', {'plot_n': 'Range', 'with_id_Pa': 'TextEdit', 'with_id_ID': 'TextEdit', 'CORRECT': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_ANZUAN2MAP_1.set('fieldLabels', {'plot_n': 'no label', 'with_id_Pa': 'no label', 'with_id_ID': 'no label', 'CORRECT': 'no label', 'REMARKS': 'no label', });
lyr_ANZUAN_2.set('fieldLabels', {'plot_n': 'inline label - always visible', 'with_id_Pa': 'inline label - always visible', 'with_id_ID': 'inline label - always visible', 'CORRECT': 'no label', 'REMARKS': 'no label', });
lyr_ANZUAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});