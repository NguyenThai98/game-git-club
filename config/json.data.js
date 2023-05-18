let dataPaymentMainte = {
    "success": true,
    "rows": [
      {
        "id": 1,
        "code": "dep",
        "msg": "Hệ thống Nạp đang được bảo trì.",
        "status": false
      },
      {
        "id": 2,
        "code": "withd",
        "msg": "Hệ thống Rút đang được bảo trì.",
        "status": false
      },
      {
        "id": 3,
        "code": "despib",
        "msg": "Hệ thống Nạp thủ công đang được bảo trì.",
        "status": false
      },
      {
        "id": 4,
        "code": "despsp",
        "msg": "Hệ thống Nạp Smartpay đang được bảo trì.",
        "status": false
      },
      {
        "id": 5,
        "code": "despcp",
        "msg": "Hệ thống Nạp Codepay đang được bảo trì.",
        "status": false
      },
      {
        "id": 6,
        "code": "despmm",
        "msg": "Hệ thống Nạp Momo đang được bảo trì.",
        "status": false
      },
      {
        "id": 7,
        "code": "desppc",
        "msg": "Ngưng hỗ trợ phương thức nạp Thẻ Cào.",
        "status": false
      },
      {
        "id": 8,
        "code": "despcryp",
        "msg": "Hệ thống Nạp Tiền ảo đang được bảo trì.",
        "status": false
      },
      {
        "id": 9,
        "code": "despgift",
        "msg": "Hệ thống Nạp Coupon đang được bảo trì.",
        "status": false
      },
      {
        "id": 10,
        "code": "withdrib",
        "msg": "Hệ thống Rút ngân hàng đang được bảo trì.",
        "status": false
      },
      {
        "id": 11,
        "code": "withdrcryp",
        "msg": "Hệ thống Rút Tiền ảo đang được bảo trì.",
        "status": false
      },
      {
        "id": 12,
        "code": "withdrpc",
        "msg": "Hệ thống Rút Thẻ cào đang được bảo trì.",
        "status": false
      }
    ],
    "attrs": []
  }
let dataPaymentBanksHit = {
    "success": true,
    "rows": [
      {
        "smartpay_code": "vcb",
        "bank_code": "VCB",
        "bank_name": "Vietcombank",
        "statement_time": [
          {
            "start": "22:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "07:30"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "smartpay_code": "acb",
        "bank_code": "ACB",
        "bank_name": "ACB",
        "statement_time": [],
        "withdrawmin": 400000,
        "account": [
          {
            "code_bank": "ACB",
            "account_name": "Đỗ Văn Mạnh",
            "account_no": "33038177",
            "branch_name": ""
          }
        ]
      },
      {
        "smartpay_code": "eab",
        "bank_code": "DongA",
        "bank_name": "DongA",
        "statement_time": [],
        "withdrawmin": 400000,
        "account": [
          {
            "code_bank": "DongA",
            "account_name": "Nguyễn Hoàng Nhi",
            "account_no": "0111182937",
            "branch_name": "Hà Nội"
          }
        ]
      },
      {
        "smartpay_code": "vtb",
        "bank_code": "VietinBank",
        "bank_name": "VietinBank",
        "statement_time": [
          {
            "start": "23:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "02:00"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "smartpay_code": "bidv",
        "bank_code": "BIDV",
        "bank_name": "BIDV",
        "statement_time": [
          {
            "start": "23:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "03:30"
          }
        ],
        "withdrawmin": 400000,
        "account": [
          {
            "code_bank": "BIDV",
            "account_name": "Huỳnh Thị Tuyết Nga",
            "account_no": "72110001620239",
            "branch_name": "Tiền Giang"
          }
        ]
      },
      {
        "smartpay_code": "sab",
        "bank_code": "Sacombank",
        "bank_name": "Sacombank",
        "statement_time": [
          {
            "start": "20:30",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "02:00"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "smartpay_code": "tcb",
        "bank_code": "Techcombank",
        "bank_name": "Techcombank",
        "statement_time": [],
        "withdrawmin": 400000,
        "account": [
          {
            "code_bank": "Techcombank",
            "account_name": "Lê Thị Phương Thảo",
            "account_no": "2233376473",
            "branch_name": ""
          }
        ]
      },
      {
        "smartpay_code": "tpb",
        "bank_code": "TPbank",
        "bank_name": "TPbank",
        "statement_time": [],
        "withdrawmin": 400000
      },
      {
        "smartpay_code": "mbb",
        "bank_code": "MBbank",
        "bank_name": "MBbank",
        "statement_time": [
          {
            "start": "21:40",
            "end": "22:40"
          },
          {
            "start": "00:20",
            "end": "01:00"
          }
        ],
        "withdrawmin": 400000,
        "account": [
          {
            "code_bank": "MBbank",
            "account_name": "Huỳnh Thị Tuyết Nga",
            "account_no": "7659730978981",
            "branch_name": "Tiền Giang"
          }
        ]
      },
      {
        "smartpay_code": "vccb",
        "bank_code": "VietCapital",
        "bank_name": "VietCapital"
      },
      {
        "smartpay_code": "vpb",
        "bank_code": "VPbank",
        "bank_name": "VPbank"
      },
      {
        "smartpay_code": "shb",
        "bank_code": "SHB",
        "bank_name": "SHB",
        "account": [
          {
            "code_bank": "SHB",
            "account_name": "Nguyễn Huy Hoàng Nam",
            "account_no": "0865320476",
            "branch_name": "HCM"
          }
        ]
      },
      {
        "smartpay_code": "eib",
        "bank_code": "Eximbank",
        "bank_name": "Eximbank",
        "statement_time": [
          {
            "start": "22:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "03:00"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "smartpay_code": "vib",
        "bank_code": "VIBbank",
        "bank_name": "VIBbank",
        "statement_time": [],
        "withdrawmin": 400000
      }
    ],
    "attrs": []
  }
let  dataPaymentBcp = {
    "success": true,
    "rows": [
      {
        "bankcode": "vccb",
        "name": "VietCapital",
        "accounts": []
      },
      {
        "bankcode": "scb",
        "name": "SCB",
        "accounts": []
      },
      {
        "bankcode": "acb",
        "name": "ACB",
        "accounts": [
          {
            "code_bank": "acb",
            "account_name": "Bùi Hoài Tâm",
            "account_no": "26599337",
            "branch_name": "DA NANG"
          }
        ],
        "statement_time": [],
        "withdrawmin": 400000
      },
      {
        "bankcode": "vtb",
        "name": "VietinBank",
        "accounts": []
      },
      {
        "bankcode": "eab",
        "name": "DongA",
        "accounts": [
          {
            "code_bank": "eab",
            "account_name": "Lê Hoà Vinh",
            "account_no": "0111191637",
            "branch_name": "Ha Noi"
          }
        ],
        "statement_time": [],
        "withdrawmin": 400000
      },
      {
        "bankcode": "mbbank",
        "name": "MBBank",
        "accounts": [],
        "statement_time": [
          {
            "start": "21:40",
            "end": "22:40"
          },
          {
            "start": "00:20",
            "end": "01:00"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "bankcode": "vcb",
        "name": "Vietcombank",
        "accounts": [],
        "statement_time": [
          {
            "start": "22:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "07:30"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "bankcode": "sab",
        "name": "Sacombank",
        "accounts": [],
        "statement_time": [
          {
            "start": "20:30",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "02:00"
          }
        ],
        "withdrawmin": 400000
      },
      {
        "bankcode": "tcb",
        "name": "Techcombank",
        "statement_time": [],
        "withdrawmin": 400000
      },
      {
        "bankcode": "shb",
        "name": "SHB",
        "accounts": [
          {
            "code_bank": "shb",
            "account_name": "Triệu Minh Hòa",
            "account_no": "0968936707",
            "branch_name": "CN Đà Nẵng"
          }
        ]
      },
      {
        "bankcode": "vpbank",
        "name": "VPbank",
        "accounts": []
      },
      {
        "bankcode": "bidv",
        "name": "BIDV",
        "accounts": [
          {
            "code_bank": "bidv",
            "account_name": "Trần Gia Bảo",
            "account_no": "18910000615074",
            "branch_name": ""
          }
        ],
        "statement_time": [
          {
            "start": "23:00",
            "end": "23:59"
          },
          {
            "start": "00:00",
            "end": "03:30"
          }
        ],
        "withdrawmin": 400000
      }
    ],
    "attrs": []
  }

let dataPaymentSmart = {
    "success": true,
    "rows": [
      {
        "smartpay_code": "vcb",
        "bank_code": "VCB",
        "bank_name": "Vietcombank"
      },
      {
        "smartpay_code": "acb",
        "bank_code": "ACB",
        "bank_name": "ACB"
      },
      {
        "smartpay_code": "eab",
        "bank_code": "DongA",
        "bank_name": "DongA"
      },
      {
        "smartpay_code": "bidv",
        "bank_code": "BIDV",
        "bank_name": "BIDV"
      },
      {
        "smartpay_code": "sab",
        "bank_code": "Sacombank",
        "bank_name": "Sacombank"
      },
      {
        "smartpay_code": "tcb",
        "bank_code": "Techcombank",
        "bank_name": "Techcombank"
      }
    ],
    "attrs": []
  }
  module.exports = {dataPaymentMainte, dataPaymentBanksHit, dataPaymentBcp,dataPaymentSmart};