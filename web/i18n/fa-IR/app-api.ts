const translation = {
  apiServer: 'سرور API',
  apiKey: 'کلید API',
  status: 'وضعیت',
  disabled: 'غیرفعال',
  ok: 'در سرویس',
  copy: 'کپی',
  copied: 'کپی شد',
  play: 'پخش',
  pause: 'مکث',
  playing: 'در حال پخش',
  loading: 'در حال بارگذاری',
  merMaid: {
    rerender: 'بازسازی مجدد',
  },
  never: 'هرگز',
  apiKeyModal: {
    apiSecretKey: 'کلید مخفی API',
    apiSecretKeyTips: 'برای جلوگیری از سوء استفاده از API، از کلید API خود محافظت کنید. از استفاده از آن به صورت متن ساده در کد فرانت‌اند خودداری کنید. :)',
    createNewSecretKey: 'ایجاد کلید مخفی جدید',
    secretKey: 'کلید مخفی',
    created: 'ایجاد شده',
    lastUsed: 'آخرین استفاده',
    generateTips: 'این کلید را در مکانی امن و قابل دسترس نگه دارید.',
  },
  actionMsg: {
    deleteConfirmTitle: 'این کلید مخفی حذف شود؟',
    deleteConfirmTips: 'این عمل قابل بازگشت نیست.',
    ok: 'تایید',
  },
  completionMode: {
    title: 'API برنامه تکمیل',
    info: 'برای تولید متن با کیفیت بالا، مانند مقالات، خلاصه‌ها و ترجمه‌ها، از API پیام‌های تکمیلی با ورودی کاربر استفاده کنید. تولید متن به پارامترهای مدل و قالب‌های پرامپت تنظیم شده در مهندسی پرامپت Dify بستگی دارد.',
    createCompletionApi: 'ایجاد پیام تکمیلی',
    createCompletionApiTip: 'یک پیام تکمیلی برای پشتیبانی از حالت سوال و جواب ایجاد کنید.',
    inputsTips: '(اختیاری) فیلدهای ورودی کاربر را به صورت جفت‌های کلید-مقدار ارائه دهید که با متغیرهای موجود در مهندسی پرامپت مطابقت دارند. کلید نام متغیر است و مقدار، مقدار پارامتر است. اگر نوع فیلد انتخابی باشد، مقدار ارسال شده باید یکی از گزینه‌های از پیش تعیین شده باشد.',
    queryTips: 'محتوای متن ورودی کاربر.',
    blocking: 'نوع مسدودکننده، منتظر اتمام اجرا و بازگشت نتایج. (درخواست‌ها ممکن است در صورت طولانی بودن فرآیند قطع شوند)',
    streaming: 'بازگشت جریانی. پیاده‌سازی بازگشت جریانی بر اساس SSE (رویدادهای ارسالی سرور).',
    messageFeedbackApi: 'بازخورد پیام (لایک)',
    messageFeedbackApiTip: 'پیام‌های دریافتی را از طرف کاربران نهایی با لایک یا دیسلایک ارزیابی کنید. این داده‌ها در صفحه گزارش‌ها و یادداشت‌ها قابل مشاهده هستند و برای تنظیم دقیق مدل در آینده استفاده می‌شوند.',
    messageIDTip: 'شناسه پیام',
    ratingTip: 'لایک یا دیسلایک، null برای لغو',
    parametersApi: 'دریافت اطلاعات پارامترهای برنامه',
    parametersApiTip: 'بازیابی پارامترهای ورودی پیکربندی شده، شامل نام‌های متغیر، نام‌های فیلد، انواع و مقادیر پیش‌فرض. معمولاً برای نمایش این فیلدها در یک فرم یا پر کردن مقادیر پیش‌فرض پس از بارگیری کلاینت استفاده می‌شود.',
  },
  chatMode: {
    title: 'API برنامه چت',
    info: 'برای برنامه‌های مکالمه‌ای چندمنظوره با استفاده از فرمت سوال و جواب، API پیام‌های چت را برای شروع گفتگو فراخوانی کنید. با ارسال شناسه مکالمه بازگشتی، گفتگوهای مداوم را حفظ کنید. پارامترهای پاسخ و قالب‌ها به تنظیمات مهندسی پرامپت Dify بستگی دارند.',
    createChatApi: 'ایجاد پیام چت',
    createChatApiTip: 'یک پیام مکالمه جدید ایجاد کنید یا یک گفتگوی موجود را ادامه دهید.',
    inputsTips: '(اختیاری) فیلدهای ورودی کاربر را به صورت جفت‌های کلید-مقدار ارائه دهید که با متغیرهای موجود در مهندسی پرامپت مطابقت دارند. کلید نام متغیر است و مقدار، مقدار پارامتر است. اگر نوع فیلد انتخابی باشد، مقدار ارسال شده باید یکی از گزینه‌های از پیش تعیین شده باشد.',
    queryTips: 'محتوای ورودی/سوال کاربر',
    blocking: 'نوع مسدودکننده، منتظر اتمام اجرا و بازگشت نتایج. (درخواست‌ها ممکن است در صورت طولانی بودن فرآیند قطع شوند)',
    streaming: 'بازگشت جریانی. پیاده‌سازی بازگشت جریانی بر اساس SSE (رویدادهای ارسالی سرور).',
    conversationIdTip: '(اختیاری) شناسه مکالمه: برای اولین مکالمه خالی بگذارید؛ برای ادامه گفتگو، شناسه مکالمه را از متن ارسال کنید.',
    messageFeedbackApi: 'بازخورد کاربر نهایی پیام، لایک',
    messageFeedbackApiTip: 'پیام‌های دریافتی را از طرف کاربران نهایی با لایک یا دیسلایک ارزیابی کنید. این داده‌ها در صفحه گزارش‌ها و یادداشت‌ها قابل مشاهده هستند و برای تنظیم دقیق مدل در آینده استفاده می‌شوند.',
    messageIDTip: 'شناسه پیام',
    ratingTip: 'لایک یا دیسلایک، null برای لغو',
    chatMsgHistoryApi: 'دریافت تاریخچه پیام‌های چت',
    chatMsgHistoryApiTip: 'صفحه اول آخرین `limit` پیام را به صورت معکوس برمی‌گرداند.',
    chatMsgHistoryConversationIdTip: 'شناسه مکالمه',
    chatMsgHistoryFirstId: 'شناسه اولین رکورد چت در صفحه فعلی. پیش‌فرض هیچ است.',
    chatMsgHistoryLimit: 'تعداد چت‌هایی که در یک درخواست برگردانده می‌شوند',
    conversationsListApi: 'دریافت لیست مکالمات',
    conversationsListApiTip: 'لیست جلسات کاربر فعلی را دریافت می‌کند. به طور پیش‌فرض، 20 جلسه آخر برگردانده می‌شود.',
    conversationsListFirstIdTip: 'شناسه آخرین رکورد در صفحه فعلی، پیش‌فرض هیچ.',
    conversationsListLimitTip: 'تعداد چت‌هایی که در یک درخواست برگردانده می‌شوند',
    conversationRenamingApi: 'تغییر نام مکالمه',
    conversationRenamingApiTip: 'تغییر نام مکالمات؛ نام در رابط‌های کاربری چند جلسه‌ای نمایش داده می‌شود.',
    conversationRenamingNameTip: 'نام جدید',
    parametersApi: 'دریافت اطلاعات پارامترهای برنامه',
    parametersApiTip: 'بازیابی پارامترهای ورودی پیکربندی شده، شامل نام‌های متغیر، نام‌های فیلد، انواع و مقادیر پیش‌فرض. معمولاً برای نمایش این فیلدها در یک فرم یا پر کردن مقادیر پیش‌فرض پس از بارگیری کلاینت استفاده می‌شود.',
  },
  develop: {
    requestBody: 'بدنه درخواست',
    pathParams: 'پارامترهای مسیر',
    query: 'پرس‌وجو',
  },
  regenerate: 'بازسازی',
}

export default translation
