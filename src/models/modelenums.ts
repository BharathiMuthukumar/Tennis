import * as constants from "./types";

export { constants };

// Function to get the enum values as an array
// with the type of the enum as the return type
export function getEnumValues<TEnum, TKeys extends string>(e: {
	[key in TKeys]: TEnum;
}): TEnum[] {
	return Object.keys(e).map((k) => e[k]);
}

export const contentTypeEnum = [
	constants.ContentTypeEnum.AUDIO,
	constants.ContentTypeEnum.VIDEO,
	constants.ContentTypeEnum.TEXT,
	constants.ContentTypeEnum.SERIES,
];

export const gender = [
	constants.GenderEnum.M,
	constants.GenderEnum.F,
	constants.GenderEnum.O,
];

export const couponType = [
	constants.CouponTypeEnum.PERCENTAGE,
	constants.CouponTypeEnum.AMOUNT,
];

export const PurchaseModule = [
	constants.PurchaseOptionsEnum.AFFIRMATION,
	constants.PurchaseOptionsEnum.CHECK_IN,
	constants.PurchaseOptionsEnum.CONSULTATION,
	constants.PurchaseOptionsEnum.CURATED_YOGA,
	constants.PurchaseOptionsEnum.DIET_PLAN,
	constants.PurchaseOptionsEnum.FACIAL_SCAN,
	constants.PurchaseOptionsEnum.HEALTH_REPORT,
	constants.PurchaseOptionsEnum.LIVE_CLASS,
	constants.PurchaseOptionsEnum.LIVE_CLASS_24,
	constants.PurchaseOptionsEnum.PAID_CONTENT,
	constants.PurchaseOptionsEnum.PAID_TRIAL_LIVE_CLASS,
	constants.PurchaseOptionsEnum.PAID_TRIAL_LIVE_CLASS_24,
	constants.PurchaseOptionsEnum.SUBSCRIPTION_PLAN,
	constants.PurchaseOptionsEnum.WORKSHOP,
];

export const boRole = [
	constants.BoRoleEnum.SUPER_ADMIN,
	constants.BoRoleEnum.ADMIN,
	constants.BoRoleEnum.EXECUTIVE,
];

export const eventType = [
	constants.EventTypeEnum.LIVE_EVENT,
	constants.EventTypeEnum.WORKSHOP,
	constants.EventTypeEnum.CONSULTATION,
];

export const vendor = [constants.VendorEnum.VONAGE];

export const currencyCode = [
	constants.CurrencyCodeEnum.INR,
	constants.CurrencyCodeEnum.USD,
];

export const questionaryStatus = [
	constants.QuestionaryStatusEnum.ACTIVE,
	constants.QuestionaryStatusEnum.INACTIVE,
];

export const journalType = [
	constants.JournalTypeEnum.GUIDED,
	constants.JournalTypeEnum.SELF,
];

export const categoryType = [
	constants.CategoryTypeEnum.AFFIRMATION,
	constants.CategoryTypeEnum.FAVOURITES,
	constants.CategoryTypeEnum.DAILY_GUIDED_CONTENT,
];

export const activityType = [
	constants.ActivityTypeEnum.LOGIN,
	constants.ActivityTypeEnum.WELLNESS_STAT,
];

export const tagStatus = [
	constants.TagStatusEnum.ACTIVE,
	constants.TagStatusEnum.INACTIVE,
];

export const pricing = [constants.PricingEnum.PAID, constants.PricingEnum.FREE];

export const eventParticipantStaus = [
	constants.EventParticipantStatusEnum.PAYMENT_FAILED,
	constants.EventParticipantStatusEnum.PAYMENT_PENDING,
	constants.EventParticipantStatusEnum.ACTIVE,
	constants.EventParticipantStatusEnum.CANCELLED,
];

export const userStatus = [
	constants.UserStatusEnum.ACTIVATION_PENDING,
	constants.UserStatusEnum.ACTIVE,
	constants.UserStatusEnum.INACTIVE,
	constants.UserStatusEnum.DELETE,
];
export const customerStatus = [
	constants.CustomerStatusEnum.isDeleted,

];


export const newEmailVerificationStatus = [
	constants.NewEmailVerificationStatusEnum.PENDING_VERIFICATION,
	constants.NewEmailVerificationStatusEnum.VERIFIED,
];

export const promotionContentType = [
	constants.PromotionContentTypeEnum.AUDIO,
	constants.PromotionContentTypeEnum.VIDEO,
	constants.PromotionContentTypeEnum.IMAGE,
];

export const boUserStatus = [
	constants.BoUserStatus.INVITE_PENDING,
	constants.BoUserStatus.ACTIVE,
	constants.BoUserStatus.INACTIVE,
	constants.BoUserStatus.DELETED,
];

export const hostStatus = [
	constants.HostStatusEnum.REMOVED,
	constants.HostStatusEnum.ACTIVE,
	constants.HostStatusEnum.JOINED,
	constants.HostStatusEnum.ACTIVE,
	constants.HostStatusEnum.LEFT,
];

export const staticContent = [
	constants.StaticContentEnum.PRIVACY_POLICY,
	constants.StaticContentEnum.TERMS_AND_CONDITIONS,
	constants.StaticContentEnum.FAQS,
	constants.StaticContentEnum.CONTACT_US,
	constants.StaticContentEnum.ABOUT_US,
];

export const userAnswerStatus = [
	constants.UserAnswerStatusEnum.INSUFFICIENT_DATA,
	constants.UserAnswerStatusEnum.PAYMENT_INPROGRESS,
	constants.UserAnswerStatusEnum.PAYMENT_FAILURE,
	constants.UserAnswerStatusEnum.RESULT_AWAITING,
	constants.UserAnswerStatusEnum.SUCCESS,
	constants.UserAnswerStatusEnum.ERROR,
];

export const hostAccountStatus = [
	constants.HostAccountStatusEnum.INVITE_PENDING,
	constants.HostAccountStatusEnum.APPROVAL_PENDING,
	constants.HostAccountStatusEnum.ACTIVATION_PENDING,
	constants.HostAccountStatusEnum.ACTIVE,
	constants.HostAccountStatusEnum.INACTIVE,
	constants.HostAccountStatusEnum.DELETE,
	constants.HostAccountStatusEnum.DECLINE,
];

export const eventStatus = [
	constants.EventStatusEnum.APPROVAL_PENDING,
	constants.EventStatusEnum.REJECTED,
	constants.EventStatusEnum.PUBLISHED,
	constants.EventStatusEnum.YET_TO_START,
	constants.EventStatusEnum.ACTIVE,
	constants.EventStatusEnum.COMPLETED,
	constants.EventStatusEnum.CANCELLED,
	constants.EventStatusEnum.YET_TO_PUBLISH,
	constants.EventStatusEnum.UPCOMING,
];

export const questionaryType = [
	constants.QuestionaryTypeEnum.THINKRIGHT_ASSESSMENT,
	constants.QuestionaryTypeEnum.SLEEPRIGHT_ASSESSMENT,
	constants.QuestionaryTypeEnum.DIET_PLAN,
	constants.QuestionaryTypeEnum.HEALTH_REPORT,
	constants.QuestionaryTypeEnum.CHECK_IN,
	constants.QuestionaryTypeEnum.FACIAL_SCAN,
];

export const urlTypes = [
	constants.UrlType.CONTENT,
	constants.UrlType.PROFILE,
	constants.UrlType.PROMOTION,
];

export const formatTypes = [
	constants.FormatType.JPEG,
	constants.FormatType.MP4,
	constants.FormatType.JPG,
	constants.FormatType.PNG,
];

export const instructorCategories = [
	constants.InstructorCategories.MINDFULNESS_MEDITATION,
	constants.InstructorCategories.SPIRITUAL_MEDITATION,
	constants.InstructorCategories.FOCUSED_MEDITATION,
	constants.InstructorCategories.MOVEMENT_MEDITATION,
	constants.InstructorCategories.MANTRA_MEDITATION,
	constants.InstructorCategories.TRANSCENDENTAL_MEDITATION,
	constants.InstructorCategories.PROGRESSIVE_RELAXATION,
	constants.InstructorCategories.LOVING_KINDNESS_MEDITATION,
	constants.InstructorCategories.SOUND_AIDS,
	constants.InstructorCategories.MONITORING_YOUR_SLEEP,
	constants.InstructorCategories.ANTI_SNORING_SOLUTIONS,
	constants.InstructorCategories.SLEEP_COACHING,
	constants.InstructorCategories.SLEEPING_AIDS,
	constants.InstructorCategories.LIVE_CLASS,
	constants.InstructorCategories.FLEXIBILITY,
	constants.InstructorCategories.STRETCHING,
	constants.InstructorCategories.RELIEVE_BODY_PAIN,
	constants.InstructorCategories.BETTER_POSTURE,
	constants.InstructorCategories.HEALTHY_DIET,
	constants.InstructorCategories.NUTRITIONIST,
	constants.InstructorCategories.DIET_PLAN_REVIEWER,
	constants.InstructorCategories.LOOSE_WEIGHT,
	constants.InstructorCategories.BETTER_HEALTH,
	constants.InstructorCategories.DIETITIAN,
	constants.InstructorCategories.OPTIMUM_NUTRITION,
	constants.InstructorCategories.BE_ENERGETIC,
	constants.InstructorCategories.REDUCE_HEALTH_RISK,
	constants.InstructorCategories.THINKING,
	constants.InstructorCategories.PHYSIO,
	constants.InstructorCategories.SLEEP_WELL,
];

export const loginTypes = [
	constants.LoginTypeEnum.APPLE,
	constants.LoginTypeEnum.EMAIL,
	constants.LoginTypeEnum.FACEBOOK,
	constants.LoginTypeEnum.GOOGLE,
	constants.LoginTypeEnum.INSTAGRAM,
	constants.LoginTypeEnum.PHONE_NUMBER,
];
