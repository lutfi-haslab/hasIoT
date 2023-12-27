export type SingleData = {
    id: string;
    rawData: string;
    jsonData: object | null;
    deviceId: string;
    createdAt: string;
    DataFormat: SingleFormatData[];
}

export type SingleFormatData = {
    id: string;
    key: string;
    value: number;
    unit: string;
    deviceId: string;
    dataId: string;
    createdAt: string;
}

export type Datas = SingleData[]

export const tableData: Datas = [
    {
        "id": "sRIoM",
        "rawData": "",
        "jsonData": { "ph": 7, "hum": 80, "temp": 30 },
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T05:51:48.004Z",
        "DataFormat": [
            {
                "id": "VlkoL",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "sRIoM",
                "createdAt": "2023-09-22T05:51:48.032Z"
            },
            {
                "id": "7J1NQ",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "sRIoM",
                "createdAt": "2023-09-22T05:51:48.032Z"
            },
            {
                "id": "3KoZ9",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "sRIoM",
                "createdAt": "2023-09-22T05:51:48.032Z"
            }
        ]
    },
    {
        "id": "sWL_T",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "nkS3A",
        "createdAt": "2023-09-22T06:26:47.521Z",
        "DataFormat": [
            {
                "id": "Rx29B",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "sWL_T",
                "createdAt": "2023-09-22T06:26:47.579Z"
            },
            {
                "id": "XJpnm",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "sWL_T",
                "createdAt": "2023-09-22T06:26:47.579Z"
            },
            {
                "id": "-Rf8j",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "sWL_T",
                "createdAt": "2023-09-22T06:26:47.579Z"
            }
        ]
    },
    {
        "id": "7pEKN",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "nkS3A",
        "createdAt": "2023-09-22T07:58:45.011Z",
        "DataFormat": [
            {
                "id": "wudKt",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "7pEKN",
                "createdAt": "2023-09-22T07:58:45.083Z"
            },
            {
                "id": "5Z4gw",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "7pEKN",
                "createdAt": "2023-09-22T07:58:45.083Z"
            },
            {
                "id": "k-5iU",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "7pEKN",
                "createdAt": "2023-09-22T07:58:45.083Z"
            }
        ]
    },
    {
        "id": "u2oYy",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T07:59:27.303Z",
        "DataFormat": [
            {
                "id": "87lft",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "u2oYy",
                "createdAt": "2023-09-22T07:59:27.332Z"
            },
            {
                "id": "U2YMY",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "u2oYy",
                "createdAt": "2023-09-22T07:59:27.332Z"
            },
            {
                "id": "_X6ZH",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "u2oYy",
                "createdAt": "2023-09-22T07:59:27.332Z"
            }
        ]
    },
    {
        "id": "G7iRG",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T07:59:35.559Z",
        "DataFormat": [
            {
                "id": "NoKX9",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "G7iRG",
                "createdAt": "2023-09-22T07:59:35.588Z"
            },
            {
                "id": "KjrtT",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "G7iRG",
                "createdAt": "2023-09-22T07:59:35.588Z"
            },
            {
                "id": "HPVfQ",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "G7iRG",
                "createdAt": "2023-09-22T07:59:35.588Z"
            }
        ]
    },
    {
        "id": "VPpy8",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T08:00:58.895Z",
        "DataFormat": [
            {
                "id": "IrFQF",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "VPpy8",
                "createdAt": "2023-09-22T08:00:58.924Z"
            },
            {
                "id": "ZGqeq",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "VPpy8",
                "createdAt": "2023-09-22T08:00:58.924Z"
            },
            {
                "id": "WGsEq",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "VPpy8",
                "createdAt": "2023-09-22T08:00:58.924Z"
            }
        ]
    },
    {
        "id": "7cZ6Y",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T08:02:51.368Z",
        "DataFormat": [
            {
                "id": "0wfLl",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "7cZ6Y",
                "createdAt": "2023-09-15T08:02:51.398Z"
            },
            {
                "id": "4AYxM",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "7cZ6Y",
                "createdAt": "2023-09-15T08:02:51.398Z"
            },
            {
                "id": "8p6EM",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "7cZ6Y",
                "createdAt": "2023-09-15T08:02:51.398Z"
            }
        ]
    },
    {
        "id": "GcUhS",
        "rawData": "{\"ph\":4,\"hum\":70,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T08:28:14.806Z",
        "DataFormat": [
            {
                "id": "Ihp3g",
                "key": "PH",
                "value": 4,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "GcUhS",
                "createdAt": "2023-09-22T08:28:14.866Z"
            },
            {
                "id": "kvTXu",
                "key": "HUM",
                "value": 70,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "GcUhS",
                "createdAt": "2023-09-22T08:28:14.866Z"
            },
            {
                "id": "xHreM",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "GcUhS",
                "createdAt": "2023-09-22T08:28:14.866Z"
            }
        ]
    },
    {
        "id": "cgPTr",
        "rawData": "{\"ph\":8,\"hum\":70,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T09:10:44.065Z",
        "DataFormat": [
            {
                "id": "FrFu7",
                "key": "PH",
                "value": 8,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "cgPTr",
                "createdAt": "2023-09-22T09:10:44.133Z"
            },
            {
                "id": "qPkYG",
                "key": "HUM",
                "value": 70,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "cgPTr",
                "createdAt": "2023-09-22T09:10:44.133Z"
            },
            {
                "id": "_wFYo",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "cgPTr",
                "createdAt": "2023-09-22T09:10:44.133Z"
            }
        ]
    },
    {
        "id": "V3wsD",
        "rawData": "{\"ph\":5,\"hum\":70,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T09:11:04.640Z",
        "DataFormat": [
            {
                "id": "XgJUk",
                "key": "PH",
                "value": 5,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "V3wsD",
                "createdAt": "2023-09-22T09:11:04.669Z"
            },
            {
                "id": "PalVK",
                "key": "HUM",
                "value": 70,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "V3wsD",
                "createdAt": "2023-09-22T09:11:04.669Z"
            },
            {
                "id": "kguui",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "V3wsD",
                "createdAt": "2023-09-22T09:11:04.669Z"
            }
        ]
    },
    {
        "id": "ko3dw",
        "rawData": "{\"ph\":6,\"hum\":70,\"temp\":30}",
        "jsonData": null,
        "deviceId": "XLVLf",
        "createdAt": "2023-09-22T09:11:12.683Z",
        "DataFormat": [
            {
                "id": "6HrlA",
                "key": "PH",
                "value": 6,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "ko3dw",
                "createdAt": "2023-09-22T09:11:12.712Z"
            },
            {
                "id": "KP5DH",
                "key": "HUM",
                "value": 70,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "ko3dw",
                "createdAt": "2023-09-22T09:11:12.712Z"
            },
            {
                "id": "pkqyY",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "XLVLf",
                "dataId": "ko3dw",
                "createdAt": "2023-09-22T09:11:12.712Z"
            }
        ]
    },
    {
        "id": "GeqqU",
        "rawData": "{\"ph\":8,\"hum\":30,\"temp\":30}",
        "jsonData": null,
        "deviceId": "nkS3A",
        "createdAt": "2023-09-22T16:44:11.404Z",
        "DataFormat": [
            {
                "id": "RhI2K",
                "key": "PH",
                "value": 8,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "GeqqU",
                "createdAt": "2023-09-22T16:44:11.531Z"
            },
            {
                "id": "oyMJh",
                "key": "HUM",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "GeqqU",
                "createdAt": "2023-09-22T16:44:11.531Z"
            },
            {
                "id": "zGRR1",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "GeqqU",
                "createdAt": "2023-09-22T16:44:11.531Z"
            }
        ]
    },
    {
        "id": "xity3",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "nkS3A",
        "createdAt": "2023-09-15T05:51:48.004Z",
        "DataFormat": [
            {
                "id": "tiBRP",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "xity3",
                "createdAt": "2023-09-22T05:51:48.032Z"
            },
            {
                "id": "p6pZW",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "xity3",
                "createdAt": "2023-09-22T05:51:48.032Z"
            },
            {
                "id": "SwNRS",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "xity3",
                "createdAt": "2023-09-22T05:51:48.032Z"
            }
        ]
    },
    {
        "id": "uRwQn",
        "rawData": "{\"ph\":7,\"hum\":80,\"temp\":30}",
        "jsonData": null,
        "deviceId": "nkS3A",
        "createdAt": "2023-08-24T05:51:48.004Z",
        "DataFormat": [
            {
                "id": "aeQ22",
                "key": "HUM",
                "value": 80,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "uRwQn",
                "createdAt": "2023-08-24T05:51:48.032Z"
            },
            {
                "id": "X8Rqb",
                "key": "TEMP",
                "value": 30,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "uRwQn",
                "createdAt": "2023-08-24T05:51:48.032Z"
            },
            {
                "id": "nKxGH",
                "key": "PH",
                "value": 7,
                "unit": "",
                "deviceId": "nkS3A",
                "dataId": "uRwQn",
                "createdAt": "2023-08-24T05:51:48.032Z"
            }
        ]
    }
]