export const locales = ['zh', 'en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export type NavKey = 'home' | 'capabilities' | 'scenarios' | 'delivery' | 'contact';

type Copy = {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDesc: string;
    capabilitiesTitle: string;
    capabilitiesDesc: string;
    scenariosTitle: string;
    scenariosDesc: string;
    deliveryTitle: string;
    deliveryDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
  nav: Record<NavKey, string>;
  langLabel: string;
  langNames: Record<Locale, string>;
  brand: string;
  wordmark: string;
  person: string;
  email: string;
  cta: string;
  hero: {
    title: string;
    kicker: string;
    sub: string;
    body: string;
  };
  audience: {
    title: string;
    items: { title: string; body: string }[];
  };
  cards: {
    title: string;
    featured: string;
    items: { title: string; body: string; href: string; featured?: boolean }[];
  };
  capabilities: {
    intro: string;
    items: { title: string; body: string; points: string[] }[];
  };
  scenarios: {
    intro: string;
    items: { title: string; body: string }[];
  };
  delivery: {
    intro: string;
    items: { title: string; body: string }[];
    note: string;
  };
  contact: {
    intro: string;
    company: string;
    mailLabel: string;
    personLabel: string;
  };
  footer: {
    line: string;
    note: string;
  };
};

export const ui: Record<Locale, Copy> = {
  zh: {
    meta: {
      siteName: '盛源 · 锦升',
      homeTitle: '盛源 · 锦升',
      homeDesc: '给中小企业做能落地的业务系统。已在做企业邮件和数据安全，现在把商贸进销存 ERP 公开交付。',
      capabilitiesTitle: '能力',
      capabilitiesDesc: '企业邮件、数据安全、商贸进销存 ERP。',
      scenariosTitle: '场景',
      scenariosDesc: '贸易公司日常进销存、工厂办公室采购与库存、跨境贸易单据与多语言。',
      deliveryTitle: '交付',
      deliveryDesc: '私有化部署、培训、售后。',
      contactTitle: '联系',
      contactDesc: '联系盛源 · 锦升：jackiezhong1986@gmail.com',
    },
    nav: {
      home: '首页',
      capabilities: '能力',
      scenarios: '场景',
      delivery: '交付',
      contact: '联系',
    },
    langLabel: '语言',
    langNames: { zh: '中文', en: 'English', vi: 'Tiếng Việt' },
    brand: '盛源 · 锦升',
    wordmark: '盛源',
    person: '钟锦升',
    email: 'jackiezhong1986@gmail.com',
    cta: '联系盛源',
    hero: {
      title: '盛源 · 锦升',
      kicker: '盛源',
      sub: '给中小企业做能落地的业务系统',
      body: '已在做企业邮件和数据安全，现在把商贸进销存 ERP 公开交付。',
    },
    audience: {
      title: '给谁用',
      items: [
        { title: '贸易公司', body: '日常采购、销售、库存要在同一套账里走完。' },
        { title: '工厂办公室', body: '先把采购与库存理清，不把车间工艺写进官网模块。' },
        { title: '跨境团队', body: '单据与界面需要中文、英文、越南语对照。' },
      ],
    },
    cards: {
      title: '现在交付的三件事',
      featured: '主推',
      items: [
        {
          title: '企业邮件',
          body: '自建或托管、多域名、防垃圾、归档。现有客户线。',
          href: 'capabilities',
        },
        {
          title: '数据安全',
          body: '备份、权限、审计、终端与服务器加固。只讲结果，不公开架构。',
          href: 'capabilities',
        },
        {
          title: '商贸进销存 ERP',
          body: '采购、销售、库存、财务；多租户；中 / 英 / 越；面向越南贸易公司。',
          href: 'capabilities',
          featured: true,
        },
      ],
    },
    capabilities: {
      intro: '盛源给中小企业做能落地的业务系统与安全基础设施。不铺开讲实验室架构，只写能交付的部分。',
      items: [
        {
          title: '企业邮件',
          body: '自建或托管、多域名、防垃圾、归档。现有客户线。',
          points: ['自建或托管，按现场选择', '多域名收发', '防垃圾与归档', '现有客户线，持续运维'],
        },
        {
          title: '数据安全',
          body: '备份、权限、审计、终端与服务器加固。只讲结果，不公开架构。',
          points: ['备份可恢复', '权限按岗', '操作可审计', '终端与服务器加固到能用、能守'],
        },
        {
          title: '商贸进销存 ERP',
          body: '采购、销售、库存、财务；多租户；中 / 英 / 越；面向越南贸易公司。官网不写车间工艺模块。',
          points: ['采购、销售、库存、财务一条线', '多租户', '中文、英文、越南语', '面向越南贸易公司'],
        },
      ],
    },
    scenarios: {
      intro: '先覆盖每天都要发生的业务，不编造客户名称，也不用案例数字撑场面。',
      items: [
        {
          title: '贸易公司日常进销存',
          body: '进货、出货、库存对账是每天的事。盛源把采购、销售、库存放进同一套进销存，财务跟着单据走。',
        },
        {
          title: '工厂办公室的采购与库存',
          body: '办公室要管采购单和库房，而不是把车间工艺写进对外模块。先把货与账对齐。',
        },
        {
          title: '跨境贸易单据与多语言',
          body: '越南贸易公司常见中、英、越对照。界面与单据按三种语言交付，减少来回翻译。',
        },
      ],
    },
    delivery: {
      intro: '公开交付指可以上门或远程把系统落到你们自己的环境，并留下能继续用的人。',
      items: [
        { title: '私有化部署', body: '装到客户指定的服务器或内网。数据留在客户侧。' },
        { title: '培训', body: '按岗位把采购、销售、库存、财务的日常操作讲清楚，能独立开单。' },
        { title: '售后', body: '部署之后仍可约定排障与小改。具体范围面谈。' },
      ],
      note: '价格不在官网上公开，请来信说明场景。',
    },
    contact: {
      intro: '写信即可。请用公司邮箱说明场景与大致规模，便于判断能否接。',
      company: '盛源 · 锦升',
      mailLabel: '邮箱',
      personLabel: '联系人',
    },
    footer: {
      line: '盛源 · 锦升',
      note: '不链橱柜客户站。',
    },
  },
  en: {
    meta: {
      siteName: 'Shengyuan · Jinsheng',
      homeTitle: 'Shengyuan · Jinsheng',
      homeDesc: 'Business systems that actually ship for SMEs. Enterprise email and data security are already in production; trade inventory ERP is now open for delivery.',
      capabilitiesTitle: 'Capabilities',
      capabilitiesDesc: 'Enterprise email, data security, and trade inventory ERP.',
      scenariosTitle: 'Scenarios',
      scenariosDesc: 'Trading firms, factory back-office purchasing and stock, cross-border documents and languages.',
      deliveryTitle: 'Delivery',
      deliveryDesc: 'Private deployment, training, after-sales.',
      contactTitle: 'Contact',
      contactDesc: 'Contact Shengyuan · Jinsheng at jackiezhong1986@gmail.com',
    },
    nav: {
      home: 'Home',
      capabilities: 'Capabilities',
      scenarios: 'Scenarios',
      delivery: 'Delivery',
      contact: 'Contact',
    },
    langLabel: 'Language',
    langNames: { zh: '中文', en: 'English', vi: 'Tiếng Việt' },
    brand: 'Shengyuan · Jinsheng',
    wordmark: '盛源',
    person: 'Jackie Zhong',
    email: 'jackiezhong1986@gmail.com',
    cta: 'Contact Shengyuan',
    hero: {
      title: '盛源 · 锦升',
      kicker: 'Shengyuan · Jinsheng',
      sub: 'Business systems that actually ship for SMEs.',
      body: 'We already run enterprise email and data security for customers. Trade inventory ERP is now open for delivery.',
    },
    audience: {
      title: 'Who it is for',
      items: [
        { title: 'Trading firms', body: 'Purchasing, sales, and stock need to live in one ledger.' },
        { title: 'Factory back office', body: 'Purchasing and warehouse first — shop-floor process is not a public module.' },
        { title: 'Cross-border desks', body: 'Documents and UI in Chinese, English, and Vietnamese.' },
      ],
    },
    cards: {
      title: 'What we deliver now',
      featured: 'Lead offer',
      items: [
        {
          title: 'Enterprise email',
          body: 'Self-hosted or managed, multiple domains, anti-spam, archiving. A live customer line.',
          href: 'capabilities',
        },
        {
          title: 'Data security',
          body: 'Backup, access control, audit, endpoint and server hardening. Results only — we do not publish architecture.',
          href: 'capabilities',
        },
        {
          title: 'Trade inventory ERP',
          body: 'Purchasing, sales, stock, finance; multi-tenant; Chinese, English, Vietnamese; for Vietnam trading companies.',
          href: 'capabilities',
          featured: true,
        },
      ],
    },
    capabilities: {
      intro: 'Shengyuan builds business systems and security infrastructure that SMEs can actually run. We describe what we ship, not lab diagrams.',
      items: [
        {
          title: 'Enterprise email',
          body: 'Self-hosted or managed, multiple domains, anti-spam, archiving. A live customer line.',
          points: ['Self-hosted or managed, chosen on site', 'Multiple sending and receiving domains', 'Anti-spam and archiving', 'Live customer line with ongoing operations'],
        },
        {
          title: 'Data security',
          body: 'Backup, access control, audit, endpoint and server hardening. Results only — we do not publish architecture.',
          points: ['Backups that restore', 'Role-based access', 'Auditable actions', 'Endpoints and servers hardened to a usable bar'],
        },
        {
          title: 'Trade inventory ERP',
          body: 'Purchasing, sales, stock, finance; multi-tenant; Chinese, English, Vietnamese; for Vietnam trading companies.',
          points: ['Purchasing, sales, stock, and finance on one line', 'Multi-tenant', 'Chinese, English, Vietnamese', 'Built for Vietnam trading companies'],
        },
      ],
    },
    scenarios: {
      intro: 'We start with work that happens every day. No invented company names, no case-study numbers.',
      items: [
        {
          title: 'Day-to-day inventory at trading firms',
          body: 'Goods in, goods out, and stock checks are daily work. Shengyuan keeps purchasing, sales, and stock in one inventory system, with finance following the documents.',
        },
        {
          title: 'Purchasing and stock in a factory office',
          body: 'The office needs purchase orders and a warehouse, not a public shop-floor process module. Align goods and books first.',
        },
        {
          title: 'Cross-border documents and languages',
          body: 'Vietnam trading companies often work in Chinese, English, and Vietnamese. The UI and documents ship in all three, so teams spend less time translating.',
        },
      ],
    },
    delivery: {
      intro: 'Open for delivery means we can put the system in your environment and leave people who can keep using it.',
      items: [
        { title: 'Private deployment', body: 'Installed on servers or a private network you name. Data stays on your side.' },
        { title: 'Training', body: 'Role-based walkthroughs for purchasing, sales, stock, and finance, until staff can raise documents on their own.' },
        { title: 'After-sales', body: 'After go-live we can agree troubleshooting and small changes. Scope is discussed in person or by mail.' },
      ],
      note: 'We do not list prices on this site. Write with your scenario.',
    },
    contact: {
      intro: 'Email is enough. Use a company address, describe the scenario and a rough scale, so we can tell whether we can take it on.',
      company: '盛源 · 锦升',
      mailLabel: 'Email',
      personLabel: 'Contact',
    },
    footer: {
      line: '盛源 · 锦升',
      note: 'We do not link cabinet client sites.',
    },
  },
  vi: {
    meta: {
      siteName: '盛源 · 锦升',
      homeTitle: '盛源 · 锦升 — Shengyuan · Cẩm Thăng',
      homeDesc: 'Hệ thống nghiệp vụ cho SME, triển khai được. Đã phục vụ email doanh nghiệp và an toàn dữ liệu; ERP mua-bán-kho thương mại đang mở giao hàng.',
      capabilitiesTitle: 'Năng lực',
      capabilitiesDesc: 'Email doanh nghiệp, an toàn dữ liệu, ERP mua-bán-kho thương mại.',
      scenariosTitle: 'Tình huống',
      scenariosDesc: 'Công ty thương mại, văn phòng nhà máy, chứng từ xuyên biên giới và đa ngôn ngữ.',
      deliveryTitle: 'Bàn giao',
      deliveryDesc: 'Triển khai riêng, đào tạo, hậu mãi.',
      contactTitle: 'Liên hệ',
      contactDesc: 'Liên hệ 盛源 · 锦升: jackiezhong1986@gmail.com',
    },
    nav: {
      home: 'Trang chủ',
      capabilities: 'Năng lực',
      scenarios: 'Tình huống',
      delivery: 'Bàn giao',
      contact: 'Liên hệ',
    },
    langLabel: 'Ngôn ngữ',
    langNames: { zh: '中文', en: 'English', vi: 'Tiếng Việt' },
    brand: '盛源 · 锦升',
    wordmark: '盛源',
    person: '钟锦升',
    email: 'jackiezhong1986@gmail.com',
    cta: 'Liên hệ 盛源',
    hero: {
      title: '盛源 · 锦升',
      kicker: 'Shengyuan · Cẩm Thăng',
      sub: 'Hệ thống nghiệp vụ cho SME, triển khai được.',
      body: 'Đã phục vụ email doanh nghiệp và an toàn dữ liệu; ERP mua-bán-kho thương mại đang mở giao hàng.',
    },
    audience: {
      title: 'Dành cho ai',
      items: [
        { title: 'Công ty thương mại', body: 'Mua, bán và tồn kho cần nằm trong cùng một sổ.' },
        { title: 'Văn phòng nhà máy', body: 'Mua hàng và kho trước — quy trình phân xưởng không phải module công khai.' },
        { title: 'Bàn xuyên biên giới', body: 'Chứng từ và giao diện tiếng Trung, Anh, Việt.' },
      ],
    },
    cards: {
      title: 'Ba việc đang giao',
      featured: 'Trọng tâm',
      items: [
        {
          title: 'Email doanh nghiệp',
          body: 'Tự triển khai hoặc thuê vận hành, nhiều tên miền, chống thư rác, lưu trữ. Đường khách hiện có.',
          href: 'capabilities',
        },
        {
          title: 'An toàn dữ liệu',
          body: 'Sao lưu, phân quyền, kiểm toán, củng cố máy trạm và máy chủ. Chỉ nói kết quả, không công bố kiến trúc.',
          href: 'capabilities',
        },
        {
          title: 'ERP mua-bán-kho thương mại',
          body: 'Mua hàng, bán hàng, tồn kho, tài chính; đa tenant; Trung / Anh / Việt; dành cho công ty thương mại tại Việt Nam.',
          href: 'capabilities',
          featured: true,
        },
      ],
    },
    capabilities: {
      intro: '盛源 làm hệ thống nghiệp vụ và hạ tầng an toàn mà SME vận hành được. Chỉ viết phần giao được, không phác thảo phòng thí nghiệm.',
      items: [
        {
          title: 'Email doanh nghiệp',
          body: 'Tự triển khai hoặc thuê vận hành, nhiều tên miền, chống thư rác, lưu trữ. Đường khách hiện có.',
          points: ['Tự triển khai hoặc thuê vận hành, chọn tại hiện trường', 'Nhiều tên miền gửi-nhận', 'Chống thư rác và lưu trữ', 'Đường khách hiện có, vận hành liên tục'],
        },
        {
          title: 'An toàn dữ liệu',
          body: 'Sao lưu, phân quyền, kiểm toán, củng cố máy trạm và máy chủ. Chỉ nói kết quả, không công bố kiến trúc.',
          points: ['Sao lưu khôi phục được', 'Phân quyền theo vai trò', 'Thao tác kiểm toán được', 'Máy trạm và máy chủ được củng cố tới mức dùng được, giữ được'],
        },
        {
          title: 'ERP mua-bán-kho thương mại',
          body: 'Mua hàng, bán hàng, tồn kho, tài chính; đa tenant; Trung / Anh / Việt; dành cho công ty thương mại tại Việt Nam.',
          points: ['Mua, bán, kho, tài chính trên một mạch', 'Đa tenant', 'Tiếng Trung, Anh, Việt', 'Hướng tới công ty thương mại tại Việt Nam'],
        },
      ],
    },
    scenarios: {
      intro: 'Bắt đầu từ việc xảy ra mỗi ngày. Không bịa tên khách, không lấy số liệu case study để làm cảnh.',
      items: [
        {
          title: 'Mua-bán-kho hàng ngày của công ty thương mại',
          body: 'Nhập, xuất và đối chiếu tồn là việc mỗi ngày. 盛源 để mua, bán và kho trong một hệ thống, tài chính đi theo chứng từ.',
        },
        {
          title: 'Mua hàng và tồn kho ở văn phòng nhà máy',
          body: 'Văn phòng cần đơn mua và kho, không cần module quy trình phân xưởng trên website. Trước hết cho hàng và sổ khớp nhau.',
        },
        {
          title: 'Chứng từ xuyên biên giới và đa ngôn ngữ',
          body: 'Công ty thương mại tại Việt Nam thường làm việc bằng tiếng Trung, Anh, Việt. Giao diện và chứng từ giao đủ ba ngôn ngữ, bớt dịch đi dịch lại.',
        },
      ],
    },
    delivery: {
      intro: 'Mở giao hàng nghĩa là đưa hệ thống vào môi trường của bạn và để lại người dùng được tiếp.',
      items: [
        { title: 'Triển khai riêng', body: 'Cài trên máy chủ hoặc mạng nội bộ do khách chỉ định. Dữ liệu ở phía khách.' },
        { title: 'Đào tạo', body: 'Theo vai trò, hướng dẫn mua, bán, kho, tài chính đến khi tự mở được chứng từ.' },
        { title: 'Hậu mãi', body: 'Sau khi chạy, có thể hẹn xử lý sự cố và chỉnh nhỏ. Phạm vi trao đổi trực tiếp.' },
      ],
      note: 'Giá không đăng trên website. Hãy viết thư nêu tình huống.',
    },
    contact: {
      intro: 'Gửi thư là đủ. Dùng hộp thư công ty, nêu tình huống và quy mô khoảng, để chúng tôi biết có nhận được không.',
      company: '盛源 · 锦升',
      mailLabel: 'Thư',
      personLabel: 'Người liên hệ',
    },
    footer: {
      line: '盛源 · 锦升',
      note: 'Không liên kết tới website khách tủ bếp.',
    },
  },
};

export function t(locale: Locale): Copy {
  return ui[locale] ?? ui.zh;
}
