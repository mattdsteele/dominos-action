export interface StoreInfoResponse {
  success: boolean;
  result: Result;
}
export interface Result {
  StoreID: string;
  Phone: string;
  StreetName: string;
  City: string;
  Region: string;
  PostalCode: string;
  AddressDescription: string;
  Hours: CarryoutOrDeliveryOrHours;
  HoursDescription: string;
  TimeZoneMinutes: number;
  IsAffectedByDaylightSavingsTime: boolean;
  IsOnlineCapable: boolean;
  IsOnlineNow: boolean;
  Status: number;
  CashLimit: number;
  IsForceOffline: boolean;
  IsForceClose: boolean;
  IsOpen: boolean;
  OnlineStatusCode: string;
  StoreAsOfTime: string;
  AsOfTime: string;
  IsNEONow: boolean;
  IsSpanish: boolean;
  AllowCarryoutOrders: boolean;
  AllowDeliveryOrders: boolean;
  BusinessDate: string;
  PulseVersion: string;
  PulseVersionName: string;
  PreferredLanguage: string;
  PreferredCurrency: string;
  TimeZoneCode: string;
  Holidays: EsOrHolidaysOrUpsell;
  HolidaysDescription: string;
  ServiceHours: ServiceHours;
  ServiceHoursDescription: ServiceHoursDescription;
  CustomerCloseWarningMinutes: number;
  AcceptablePaymentTypes?: (string)[] | null;
  AcceptableCreditCards?: (string)[] | null;
  LocationInfo?: null;
  LanguageLocationInfo: LanguageLocationInfo;
  MinimumDeliveryOrderAmount: number;
  AcceptableWalletTypes?: (string)[] | null;
  SocialReviewLinks: SocialReviewLinks;
  IsAVSEnabled: boolean;
  Pop: boolean;
  LanguageTranslations: LanguageTranslations;
  StoreLocation: StoreLocation;
  DriverTrackingSupported: string;
  IsCookingInstructionsEnabled: boolean;
  IsSaltWarningEnabled: boolean;
  DriverTrackingSupportMode: string;
  StoreName?: null;
  StoreCoordinates: StoreCoordinates;
  AllowDineInOrders: boolean;
  EstimatedWaitMinutes: string;
  Upsell: EsOrHolidaysOrUpsell;
  AcceptableTipPaymentTypes?: (string)[] | null;
  FutureOrderDelayInHours: number;
  FutureOrderBlackoutBusinessDate: string;
  StoreEndTimeEvenSpansToNextBusinessDay: string;
  ecomActive: boolean;
  AllowSmsNotification: boolean;
  HasKiosk: boolean;
  IsTippingAllowedAtCheckout: boolean;
  AlternatePaymentProcess: boolean;
  AcceptAnonymousCreditCards: boolean;
  Tokenization: boolean;
  AcceptGiftCards: boolean;
  AcceptSavedCreditCard: boolean;
  AllowCardSaving: boolean;
  IsAllergenWarningEnabled: boolean;
  AllowPickupWindowOrders: boolean;
  AllowAutonomousDelivery: boolean;
  AllowDriverPooling: boolean;
  AdvDelDash: boolean;
  SaltWarningInfo?: null;
  MarketPaymentTypes?: (null)[] | null;
  CarryoutWaitTimeReason?: null;
  DeliveryWaitTimeReason?: null;
  RawPaymentGateway: string;
  AllowDuc: boolean;
  OptInAAA: boolean;
  AllowRemoteDispatch: boolean;
  AllowPiePass: boolean;
  ServiceMethodEstimatedWaitMinutes: ServiceMethodEstimatedWaitMinutes;
  SubstitutionStore: string;
}
export interface CarryoutOrDeliveryOrHours {
  Sun?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Mon?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Tue?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Wed?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Thu?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Fri?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
  Sat?: (SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity)[] | null;
}
export interface SunEntityOrMonEntityOrTueEntityOrWedEntityOrThuEntityOrFriEntityOrSatEntity {
  OpenTime: string;
  CloseTime: string;
}
export interface EsOrHolidaysOrUpsell {
}
export interface ServiceHours {
  Carryout: CarryoutOrDeliveryOrHours;
  Delivery: CarryoutOrDeliveryOrHours;
}
export interface ServiceHoursDescription {
  Carryout: string;
  Delivery: string;
}
export interface LanguageLocationInfo {
  es?: null;
}
export interface SocialReviewLinks {
  yelp: string;
  gmb: string;
  plus: string;
}
export interface LanguageTranslations {
  es: EsOrHolidaysOrUpsell;
}
export interface StoreLocation {
  Latitude: string;
  Longitude: string;
}
export interface StoreCoordinates {
  StoreLatitude: string;
  StoreLongitude: string;
}
export interface ServiceMethodEstimatedWaitMinutes {
  Delivery: DeliveryOrCarryout;
  Carryout: DeliveryOrCarryout;
}
export interface DeliveryOrCarryout {
  Min: number;
  Max: number;
}
