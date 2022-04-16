var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Academia_4 = new ol.format.GeoJSON();
var features_Academia_4 = format_Academia_4.readFeatures(json_Academia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Academia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Academia_4.addFeatures(features_Academia_4);
var lyr_Academia_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Academia_4, 
                style: style_Academia_4,
                interactive: true,
                title: '<img src="styles/legend/Academia_4.png" /> Academia'
            });
var format_Centrosdesade_5 = new ol.format.GeoJSON();
var features_Centrosdesade_5 = format_Centrosdesade_5.readFeatures(json_Centrosdesade_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrosdesade_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrosdesade_5.addFeatures(features_Centrosdesade_5);
var lyr_Centrosdesade_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrosdesade_5, 
                style: style_Centrosdesade_5,
                interactive: true,
                title: '<img src="styles/legend/Centrosdesade_5.png" /> Centros de saúde'
            });
var format_Academiasacuaberto_6 = new ol.format.GeoJSON();
var features_Academiasacuaberto_6 = format_Academiasacuaberto_6.readFeatures(json_Academiasacuaberto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Academiasacuaberto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Academiasacuaberto_6.addFeatures(features_Academiasacuaberto_6);
var lyr_Academiasacuaberto_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Academiasacuaberto_6, 
                style: style_Academiasacuaberto_6,
                interactive: true,
                title: '<img src="styles/legend/Academiasacuaberto_6.png" /> Academias a céu aberto'
            });
var format_Hospitais_7 = new ol.format.GeoJSON();
var features_Hospitais_7 = format_Hospitais_7.readFeatures(json_Hospitais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitais_7.addFeatures(features_Hospitais_7);
var lyr_Hospitais_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitais_7, 
                style: style_Hospitais_7,
                interactive: true,
                title: '<img src="styles/legend/Hospitais_7.png" /> Hospitais'
            });
var format_Empresapequenoporte_8 = new ol.format.GeoJSON();
var features_Empresapequenoporte_8 = format_Empresapequenoporte_8.readFeatures(json_Empresapequenoporte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Empresapequenoporte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Empresapequenoporte_8.addFeatures(features_Empresapequenoporte_8);
var lyr_Empresapequenoporte_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Empresapequenoporte_8, 
                style: style_Empresapequenoporte_8,
                interactive: true,
                title: '<img src="styles/legend/Empresapequenoporte_8.png" /> Empresa pequeno porte'
            });
var format_Internetpblica_9 = new ol.format.GeoJSON();
var features_Internetpblica_9 = format_Internetpblica_9.readFeatures(json_Internetpblica_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Internetpblica_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Internetpblica_9.addFeatures(features_Internetpblica_9);
var lyr_Internetpblica_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Internetpblica_9, 
                style: style_Internetpblica_9,
                interactive: true,
                title: '<img src="styles/legend/Internetpblica_9.png" /> Internet pública'
            });
var format_Areaturistica_10 = new ol.format.GeoJSON();
var features_Areaturistica_10 = format_Areaturistica_10.readFeatures(json_Areaturistica_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areaturistica_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areaturistica_10.addFeatures(features_Areaturistica_10);
var lyr_Areaturistica_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areaturistica_10, 
                style: style_Areaturistica_10,
                interactive: true,
                title: '<img src="styles/legend/Areaturistica_10.png" /> Area turistica'
            });
var group_Turismo = new ol.layer.Group({
                                layers: [lyr_Areaturistica_10,],
                                title: "Turismo"});
var group_Tecnologia = new ol.layer.Group({
                                layers: [lyr_Internetpblica_9,],
                                title: "Tecnologia"});
var group_Negcio = new ol.layer.Group({
                                layers: [lyr_Empresapequenoporte_8,],
                                title: "Negócio"});
var group_Sade = new ol.layer.Group({
                                layers: [lyr_Academia_4,lyr_Centrosdesade_5,lyr_Academiasacuaberto_6,lyr_Hospitais_7,],
                                title: "Saúde"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_GoogleTerrainHybrid_2,lyr_OpenStreetMap_3,],
                                title: "Base"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_Academia_4.setVisible(false);lyr_Centrosdesade_5.setVisible(false);lyr_Academiasacuaberto_6.setVisible(false);lyr_Hospitais_7.setVisible(false);lyr_Empresapequenoporte_8.setVisible(false);lyr_Internetpblica_9.setVisible(false);lyr_Areaturistica_10.setVisible(false);
var layersList = [group_Base,group_Sade,group_Negcio,group_Tecnologia,group_Turismo];
lyr_Academia_4.set('fieldAliases', {'ID_EQ_SAUD': 'ID_EQ_SAUD', 'CATEGORIA': 'CATEGORIA', 'SIGLA_CATE': 'SIGLA_CATE', 'NOME': 'NOME', 'TIPO_LOGRA': 'TIPO_LOGRA', 'LOGRADOURO': 'LOGRADOURO', 'NUMERO_IMO': 'NUMERO_IMO', 'TELEFONE': 'TELEFONE', });
lyr_Centrosdesade_5.set('fieldAliases', {'ID_EQ_SAUD': 'ID_EQ_SAUD', 'CATEGORIA': 'CATEGORIA', 'SIGLA_CATE': 'SIGLA_CATE', 'NOME': 'NOME', 'TIPO_LOGRA': 'TIPO_LOGRA', 'LOGRADOURO': 'LOGRADOURO', 'NUMERO_IMO': 'NUMERO_IMO', 'TELEFONE': 'TELEFONE', });
lyr_Academiasacuaberto_6.set('fieldAliases', {'ID_EQ_ESP': 'ID_EQ_ESP', 'NOME': 'NOME', 'TIPO': 'TIPO', 'ENDERECO': 'ENDERECO', });
lyr_Hospitais_7.set('fieldAliases', {'ID_EQ_SAUD': 'ID_EQ_SAUD', 'CATEGORIA': 'CATEGORIA', 'SIGLA_CATE': 'SIGLA_CATE', 'NOME': 'NOME', 'TIPO_LOGRA': 'TIPO_LOGRA', 'LOGRADOURO': 'LOGRADOURO', 'NUMERO_IMO': 'NUMERO_IMO', 'TELEFONE': 'TELEFONE', });
lyr_Empresapequenoporte_8.set('fieldAliases', {'ID_ATVECON': 'ID_ATVECON', 'CNAE_PRINC': 'CNAE_PRINC', 'DESCRICAO_': 'DESCRICAO_', 'CNAE_SECUN': 'CNAE_SECUN', 'NATUREZA_J': 'NATUREZA_J', 'PORTE_EMPR': 'PORTE_EMPR', 'AREA_UTILI': 'AREA_UTILI', 'IND_SIMPLE': 'IND_SIMPLE', 'IND_MEI': 'IND_MEI', 'TIPO_UNIDA': 'TIPO_UNIDA', 'FORMA_ATUA': 'FORMA_ATUA', 'DESC_LOGRA': 'DESC_LOGRA', 'NOME_LOGRA': 'NOME_LOGRA', 'NUMERO_IMO': 'NUMERO_IMO', 'COMPLEMENT': 'COMPLEMENT', 'NOME_BAIRR': 'NOME_BAIRR', 'NOME': 'NOME', 'NOME_FANTA': 'NOME_FANTA', 'CNPJ': 'CNPJ', 'DATA_INICI': 'DATA_INICI', });
lyr_Internetpblica_9.set('fieldAliases', {'ID_EHS': 'ID_EHS', 'NOME': 'NOME', 'LOCALIZACA': 'LOCALIZACA', 'CODIGO_PRO': 'CODIGO_PRO', });
lyr_Areaturistica_10.set('fieldAliases', {'ID_ATRATIV': 'ID_ATRATIV', 'DESCRICAO': 'DESCRICAO', 'CATEGORIA': 'CATEGORIA', 'ENDERECO': 'ENDERECO', 'LINK_SITE_': 'LINK_SITE_', 'REF_LOCALI': 'REF_LOCALI', });
lyr_Academia_4.set('fieldImages', {'ID_EQ_SAUD': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SIGLA_CATE': 'TextEdit', 'NOME': 'TextEdit', 'TIPO_LOGRA': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'NUMERO_IMO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_Centrosdesade_5.set('fieldImages', {'ID_EQ_SAUD': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SIGLA_CATE': 'TextEdit', 'NOME': 'TextEdit', 'TIPO_LOGRA': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'NUMERO_IMO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_Academiasacuaberto_6.set('fieldImages', {'ID_EQ_ESP': 'TextEdit', 'NOME': 'TextEdit', 'TIPO': 'TextEdit', 'ENDERECO': 'TextEdit', });
lyr_Hospitais_7.set('fieldImages', {'ID_EQ_SAUD': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SIGLA_CATE': 'TextEdit', 'NOME': 'TextEdit', 'TIPO_LOGRA': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'NUMERO_IMO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_Empresapequenoporte_8.set('fieldImages', {'ID_ATVECON': 'TextEdit', 'CNAE_PRINC': 'TextEdit', 'DESCRICAO_': 'TextEdit', 'CNAE_SECUN': 'TextEdit', 'NATUREZA_J': 'TextEdit', 'PORTE_EMPR': 'TextEdit', 'AREA_UTILI': 'TextEdit', 'IND_SIMPLE': 'TextEdit', 'IND_MEI': 'TextEdit', 'TIPO_UNIDA': 'TextEdit', 'FORMA_ATUA': 'TextEdit', 'DESC_LOGRA': 'TextEdit', 'NOME_LOGRA': 'TextEdit', 'NUMERO_IMO': 'TextEdit', 'COMPLEMENT': 'TextEdit', 'NOME_BAIRR': 'TextEdit', 'NOME': 'TextEdit', 'NOME_FANTA': 'TextEdit', 'CNPJ': 'TextEdit', 'DATA_INICI': 'TextEdit', });
lyr_Internetpblica_9.set('fieldImages', {'ID_EHS': 'TextEdit', 'NOME': 'TextEdit', 'LOCALIZACA': 'TextEdit', 'CODIGO_PRO': 'TextEdit', });
lyr_Areaturistica_10.set('fieldImages', {'ID_ATRATIV': 'TextEdit', 'DESCRICAO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'ENDERECO': 'TextEdit', 'LINK_SITE_': 'TextEdit', 'REF_LOCALI': 'TextEdit', });
lyr_Academia_4.set('fieldLabels', {});
lyr_Centrosdesade_5.set('fieldLabels', {});
lyr_Academiasacuaberto_6.set('fieldLabels', {});
lyr_Hospitais_7.set('fieldLabels', {});
lyr_Empresapequenoporte_8.set('fieldLabels', {});
lyr_Internetpblica_9.set('fieldLabels', {});
lyr_Areaturistica_10.set('fieldLabels', {});
lyr_Areaturistica_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});