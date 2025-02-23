const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  auth: {
    sendOtp: baseUrl + "/tazmin/notification/send-otp",
  },
  brand: {
    searchBrand: baseUrl + "ex/brand/search-brand",
  },
  currency: baseUrl + "general-config/search",
  car: {
    searchCarModelByBrand: baseUrl + "ex/car-model/search-car-model-by-brand",
    getCarYearByModelInfo: baseUrl + "ex/car-type/get-car-year-by-model-info",
    searchCarTypeByCarModelAndYear:
      baseUrl + "ex/car-type/search-car-type-by-car-model-and-year",
    calculatePrice: baseUrl + "ex/car/calculate-insurance-price",
    searchUniqueCar: baseUrl + "ex/car/search-unique-car",
    getCarPriceChartByTypeId:
      baseUrl + "car-price-chart/get-car-price-chart-by-type-id",
    searchCarByPrice: baseUrl + "car/searchCarByPrice",
    searchMotorCycleByPrice: baseUrl + "car/motorcycle-price",
    getPriceChart: baseUrl + "car-price-chart/get-car-price-chart-by-type-id",
    getCarDetail: baseUrl + "car-Info/car-details",
    searchCarByPrice: baseUrl + "car/search-with-price",
    searchMotorByPrice: baseUrl + "motorcycle-price/search-with-price",
    carPriceList:
      baseUrl + "car/search-with-price-without-mongo?pageSize=200&pageNo=0",
    depreciation:
      baseUrl +
      "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=INSURANCE",
  },
  motor: {
    calculatePrice: baseUrl + "motorcycle-price/calculate-price",
    motorPriceList:
      baseUrl +
      "motorcycle-price/search-with-price-without-mongo?pageSize=200&pageNo=0",
    motorDetail: baseUrl + "motorcycle/get-details",
  },
  colors: {
    getColors:
      baseUrl +
      "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=COLOR",
  },
  location: {
    getProvinces: baseUrl + "basic-information/search-provinces",
    getCities: baseUrl + "basic-information/search-cities",
  },
  insurance: {
    preRegistration: baseUrl + "pre-registration-insurance/add",
  },
  payment: {
    requestPayment: baseUrl + "payment/request",
  },
  licensePlate: {
    searchWithPagination: baseUrl + "license-plate/search-with-pagination",
    deletePlate: baseUrl + "license-plate/delete/",
    addPlate: baseUrl + "license-plate/add",
    editPlate: baseUrl + "license-plate/edit/",
  },
  carBodyStatus: {
    getColoredPart:
      baseUrl +
      "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=COLORED_PART",
    getReplacedPart:
      baseUrl +
      "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=REPLACED_PART",
  },
  user: {
    getUserInfo: "https://api.tazminmashin.com/tazmin/users/get-user-info",
    editUserInfo: "https://api.tazminmashin.com/tazmin/users/edit-user-info/",
  },
  inquiry: {
    getResultHistory:
      baseUrl +
      "inquiry/result-history?mobileNumber=09391287786&nationalCode=6700034442&isPaid=false",
  },
  ticket: {
    searchTickets: "https://api.tazminmashin.com/tazmin/ticket/search-tickets",
    calculateTickets:
      "https://api.tazminmashin.com/tazmin/ticket/calculate-tickets",
    addTicket: "https://api.tazminmashin.com/tazmin/ticket/add-ticket",
    searchDepartments:
      "https://api.tazminmashin.com/tazmin/ticket-department/search-departments",
    searchMessages:
      "https://api.tazminmashin.com/tazmin/ticket-message/search-messages",
  },
  contactUs: baseUrl + "contact-us/add",
  wp: "https://tazminmashin.ir/wp-json/wp/v2/posts?_embed&per_page=10",
};
