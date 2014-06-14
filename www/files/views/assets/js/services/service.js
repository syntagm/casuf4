/*
 * Service settings
 */
var TwitterSearchSettings = {
    "consumerKey": "21XSbS4Ea1w8Q9Y05gwPiDh8X",
    "consumerKeySecret": "olRumfs3GxdQGHa0qhmBdOFJ8eOpCLkIU20jJgouGC70JhGaBY"
}
var location_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "53974b4ee4b0a7e2630ec104"
}
var messages_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "53949210e4b0a7e2630eb77d",
    "sort": "-_createdAt"
}

/*
 * Services
 */

var location_locations_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings
});

var messages_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': messages_settings
});

var TwitterSearch_SearchService = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var messages_messages_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/messages',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': messages_settings
});

var messages_messages_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/messages',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': messages_settings
});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',
});

var TwitterSearch_OAuth2Service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': TwitterSearchSettings
});

/*
 * Data models
 */
Apperyio.models = {
    "AAB7DD8B-612F-6E85-DA32-0D74E1330AA0": {
        "name": "String",
        "type": "string",
        "parentGuid": null,
        "reference": null
    },
    "ABB7DD8B-612F-6E85-DA32-0D74E1330AA1": {
        "name": "Number",
        "type": "number",
        "parentGuid": null,
        "reference": null
    },
    "ACB7DD8B-612F-6E85-DA32-0D74E1330AA2": {
        "name": "Boolean",
        "type": "boolean",
        "parentGuid": null,
        "reference": null
    }

};

/*
 * Data storages
 */
Apperyio.storages = {};