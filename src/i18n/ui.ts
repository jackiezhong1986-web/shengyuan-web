export const locales = ['zh', 'en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export type NavKey = 'home' | 'capabilities' | 'scenarios' | 'delivery' | 'contact';

type SpecRow = { label: string; detail: string };

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
  brandSub: string;
  person: string;
  email: string;
  cta: string;
  hero: {
    kicker: string;
    title: string;
    sub: string;
    body: string;
    chips: string[];
  };
  schematic: {
    id: string;
    title: string;
    steps: string[];
  };
  about: {
    id: string;
    title: string;
    items: { kicker: string; title: string; body: string }[];
  };
  audience: {
    id: string;
    title: string;
    items: { title: string; body: string }[];
  };
  cards: {
    id: string;
    title: string;
    featured: string;
    items: { id: string; title: string; body: string; featured?: boolean }[];
  };
  capabilities: {
    id: string;
    intro: string;
    items: {
      id: string;
      title: string;
      body: string;
      rows: SpecRow[];
      modules?: { name: string; scope: string }[];
      flow?: string;
      note?: string;
      featured?: boolean;
    }[];
  };
  scenarios: {
    id: string;
    intro: string;
    items: { title: string; body: string; points: string[] }[];
  };
  delivery: {
    id: string;
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
      homeDesc: '给中小企业做能落地的业务系统与安全基础设施。企业邮件和数据安全已有客户在跑。商贸进销存 ERP 现已开放交付。',
      capabilitiesTitle: '能力',
      capabilitiesDesc: '企业邮件、数据安全、商贸进销存 ERP：模块范围与规格，不是三句空话。',
      scenariosTitle: '场景',
      scenariosDesc: '贸易公司日常进销存、工厂办公室采购与库存、跨境贸易单据与多语言。',
      deliveryTitle: '交付',
      deliveryDesc: '私有化部署、按角色培训、售后。数据在客户侧。不标价。',
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
    brandSub: '锦升',
    person: '钟锦升',
    email: 'jackiezhong1986@gmail.com',
    cta: '联系盛源',
    hero: {
      kicker: 'SY / 盛源 · 锦升',
      title: '盛源',
      sub: '给中小企业做能落地的业务系统与安全基础设施',
      body: '企业邮件和数据安全已有客户在跑。商贸进销存 ERP 现已开放交付：采购、销售、库存、财务，多租户，中/英/越，面向越南贸易公司。',
      chips: ['EMAIL', 'SECURITY', 'ERP'],
    },
    schematic: {
      id: 'FLOW-01',
      title: '商贸进销存四步',
      steps: ['采购', '入库', '销售出库', '跟单结算'],
    },
    about: {
      id: 'SY-01',
      title: '盛源做什么',
      items: [
        {
          kicker: '01',
          title: '做系统，不是模板店',
          body: '我们是做系统的公司，不是模板店。按现场把邮件、安全和进销存落到能用，不卖一套换皮的页面。',
        },
        {
          kicker: '02',
          title: '已经交付',
          body: '企业邮箱：自建或托管、多域名、防垃圾、归档、员工开销户。数据安全：可恢复备份、权限、审计、终端与服务器加固。现有客户持续运维。',
        },
        {
          kicker: '03',
          title: '正在开放',
          body: '商贸进销存 ERP。采购、销售、库存、财务跟单据走；多租户隔离；界面与单据中 / 英 / 越。面向越南贸易公司。',
        },
        {
          kicker: '04',
          title: '公开边界',
          body: '不把橱柜客户项目写成公开产品，也不链客户主页。这里只写盛源自己交付的系统。',
        },
      ],
    },
    audience: {
      id: 'WHO-01',
      title: '给谁用',
      items: [
        {
          title: '贸易公司',
          body: '每天进货、出货、对库存。采购、销售、库存要在同一套系统里走完，财务跟着单据走。',
        },
        {
          title: '工厂办公室',
          body: '先把采购单和库房理清。官网不把车间工艺写成公开模块。',
        },
        {
          title: '跨境团队',
          body: '越南贸易公司常见中、英、越对照。界面与单据按三种语言交付。',
        },
      ],
    },
    cards: {
      id: 'CAP-00',
      title: '现在交付的三件事',
      featured: '主推',
      items: [
        {
          id: 'MAIL',
          title: '企业邮件',
          body: '自建或代运维。多域名收发，反垃圾 / 反钓鱼，归档检索，入职开户与离职回收。网页端加标准客户端。现有客户持续运维。',
        },
        {
          id: 'SEC',
          title: '数据安全',
          body: '备份能还原。最小权限。操作可审计。终端加固。服务器加固。只讲结果，不公开内部架构。',
        },
        {
          id: 'ERP',
          title: '商贸进销存 ERP',
          body: '采购、销售、库存、财务。多租户隔离。中 / 英 / 越界面与单据。四步：采购 → 入库 → 销售出库 → 跟单结算。面向越南贸易公司。',
          featured: true,
        },
      ],
    },
    capabilities: {
      id: 'CAP-01',
      intro: '下面按模块写能交付的范围。不铺实验室架构，也不用编造的客户数字撑场面。',
      items: [
        {
          id: 'MAIL',
          title: '企业邮件',
          body: '给公司自己的域名做邮箱。自建或由盛源代运维，按现场选。现有客户持续运维，不是演示环境。',
          rows: [
            { label: '部署', detail: '自建或代运维，按现场选择' },
            { label: '域名', detail: '多域名收发，一个组织可挂多个域名' },
            { label: '防护', detail: '反垃圾 / 反钓鱼' },
            { label: '归档', detail: '归档检索，邮件可按条件找回' },
            { label: '账号', detail: '入职开户，离职回收' },
            { label: '客户端', detail: '网页端 + 标准邮件客户端' },
            { label: '运维', detail: '现有客户持续运维' },
          ],
        },
        {
          id: 'SEC',
          title: '数据安全',
          body: '只讲结果：备份能还原、权限能收住、操作能查。终端和服务器按可用标准加固。不公开内部架构。',
          rows: [
            { label: '备份', detail: '备份能还原，不是只做备份文件摆着' },
            { label: '权限', detail: '最小权限，按岗位给，不默认全开' },
            { label: '审计', detail: '关键操作可审计，事后能查' },
            { label: '终端', detail: '办公终端加固到能用、能守' },
            { label: '服务器', detail: '服务器加固到能用、能守' },
          ],
        },
        {
          id: 'ERP',
          title: '商贸进销存 ERP',
          body: '面向越南贸易公司的商贸进销存。采购、销售、库存、财务跟单据走。多租户隔离。界面与单据中 / 英 / 越。不含生产、BOM、MES。',
          featured: true,
          flow: '采购 → 入库 → 销售出库 → 跟单结算',
          note: '财务是应收应付跟单据走，不宣称完整独立财务套件。',
          modules: [
            { name: '采购', scope: '供应商、采购单、到货、对账' },
            { name: '销售', scope: '客户、报价、销售单、出库' },
            { name: '库存', scope: '仓库、盘点、调拨' },
            { name: '财务', scope: '应收应付跟单据走（不是完整独立财务套件）' },
            { name: '多租户', scope: '租户之间数据隔离' },
            { name: '语言', scope: '中 / 英 / 越 界面与单据' },
          ],
          rows: [
            { label: '对象', detail: '越南贸易公司，中小规模日常进销存' },
            { label: '流程', detail: '采购 → 入库 → 销售出库 → 跟单结算' },
            { label: '范围', detail: '商贸进销存。不含生产、BOM、MES' },
            { label: '隔离', detail: '多租户，各公司数据分开' },
            { label: '语言', detail: '界面与单据：中文、英文、越南语' },
          ],
        },
      ],
    },
    scenarios: {
      id: 'SCN-01',
      intro: '先覆盖每天都要发生的业务。不编造客户名称，也不用案例数字撑场面。',
      items: [
        {
          title: '贸易公司日常进销存',
          body: '进货、出货、库存对账是每天的事。盛源把采购、销售、库存放进同一套进销存，财务跟着单据走，而不是另开一套账。面向越南贸易公司的日常，不是集团级全模块系统。不写客户名字，也不用到货量、周转天数这类编出来的指标。',
          points: [
            '采购单到货入库，供应商可对账',
            '销售开单后出库，客户与报价能顺着查',
            '仓库、盘点、调拨在同一套库存里',
            '应收应付跟单据走，不另起独立财务神话',
          ],
        },
        {
          title: '工厂办公室的采购与库存',
          body: '工厂办公室要管采购单和库房：谁订了货、货到了没有、库里还有多少。这和车间工艺不是同一层事。官网不把生产过程写成公开模块。先把货与账对齐，车间工艺另议，不写进对外能力表。',
          points: [
            '采购单、到货、入库是办公室每天要碰的',
            '仓库与盘点先能对上实物',
            '不覆盖生产工艺、BOM、MES',
            '需要车间模块时面谈，不在官网承诺',
          ],
        },
        {
          title: '跨境贸易单据与多语言',
          body: '越南贸易公司常见中、英、越对照：对接国内供应商用中文，对外报价用英文，现场操作要越南语。界面与单据按三种语言交付，减少来回翻译和各做各的表格。多租户隔离，各公司数据分开，不把不同客户的账混在一个库里给人看。',
          points: [
            '界面中 / 英 / 越',
            '单据三种语言，减少来回翻译',
            '多租户隔离，公司之间数据分开',
            '适合跨境贸易柜台，而不是只服务单一语种内贸',
          ],
        },
      ],
    },
    delivery: {
      id: 'DLV-01',
      intro: '公开交付指可以上门或远程把系统落到你们自己的环境，并留下能继续用的人。数据在客户侧。价格不在官网上标。',
      items: [
        {
          title: '私有化部署',
          body: '装到客户指定的服务器或内网。数据留在客户侧，不把客户业务数据放到盛源这边当卖点。部署方式按现场谈：自有机房、客户云账号、或指定主机。',
        },
        {
          title: '按角色培训',
          body: '按采购、销售、库存、财务岗位把日常操作讲清楚，直到能独立开单、查单、对账。不是只给一份说明书。',
        },
        {
          title: '售后',
          body: '部署之后仍可约定排障与小改。具体范围、响应方式和期限面谈，不在官网写死成套餐。',
        },
      ],
      note: '不标价。请来信说明场景、人数和大致部署环境，便于判断能否接。',
    },
    contact: {
      intro: '写信即可。请用公司邮箱说明场景、人数和大致部署环境，便于判断能否接。',
      company: '公司',
      mailLabel: '邮箱',
      personLabel: '联系人',
    },
    footer: {
      line: '盛源 · 锦升',
      note: '不把橱柜客户项目写成公开产品，也不链客户主页。',
    },
  },
  en: {
    meta: {
      siteName: 'Shengyuan · Jinsheng',
      homeTitle: 'Shengyuan · Jinsheng',
      homeDesc: 'Business systems and security infrastructure that SMEs can actually run. Enterprise email and data security are already in production. Trade inventory ERP is now open for delivery.',
      capabilitiesTitle: 'Capabilities',
      capabilitiesDesc: 'Enterprise email, data security, and trade inventory ERP — module scope and specs, not three short paragraphs.',
      scenariosTitle: 'Scenarios',
      scenariosDesc: 'Day-to-day inventory at trading firms, factory back-office purchasing and stock, cross-border documents and languages.',
      deliveryTitle: 'Delivery',
      deliveryDesc: 'Private deployment, role-based training, after-sales. Data stays on the customer side. No prices on this site.',
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
    brandSub: '锦升',
    person: 'Zhong Jinsheng',
    email: 'jackiezhong1986@gmail.com',
    cta: 'Contact Shengyuan',
    hero: {
      kicker: 'SY / Shengyuan · Jinsheng',
      title: '盛源',
      sub: 'Business systems and security infrastructure that SMEs can actually run',
      body: 'Enterprise email and data security already run in customer environments. Trade inventory ERP is now open for delivery: purchasing, sales, stock, and finance; multi-tenant; Chinese, English, and Vietnamese; for trading companies in Vietnam.',
      chips: ['EMAIL', 'SECURITY', 'ERP'],
    },
    schematic: {
      id: 'FLOW-01',
      title: 'Four-step trade inventory flow',
      steps: ['Purchase', 'Inbound', 'Sales outbound', 'Document settlement'],
    },
    about: {
      id: 'SY-01',
      title: 'What Shengyuan does',
      items: [
        {
          kicker: '01',
          title: 'A systems company, not a template shop',
          body: 'We build and run systems. We do not sell a reskinned page. Email, security, and inventory have to land in the customer environment and stay usable.',
        },
        {
          kicker: '02',
          title: 'Already delivering',
          body: 'Enterprise email: self-hosted or managed, multiple domains, anti-spam, archiving, mailbox provisioning and offboarding. Data security: backups that restore, access control, audit, endpoint and server hardening. Live customers, ongoing operations.',
        },
        {
          kicker: '03',
          title: 'Now opening',
          body: 'Trade inventory ERP. Purchasing, sales, stock, and finance follow the documents; multi-tenant isolation; UI and documents in Chinese, English, and Vietnamese. Built for trading companies in Vietnam.',
        },
        {
          kicker: '04',
          title: 'Public boundary',
          body: 'Cabinet client projects are not listed as public products, and we do not link client homepages. This site only describes systems Shengyuan itself delivers.',
        },
      ],
    },
    audience: {
      id: 'WHO-01',
      title: 'Who it is for',
      items: [
        {
          title: 'Trading firms',
          body: 'Goods in, goods out, and stock checks every day. Purchasing, sales, and stock belong in one system, with finance following the documents.',
        },
        {
          title: 'Factory back office',
          body: 'Purchase orders and the warehouse first. Shop-floor process is not a public module on this site.',
        },
        {
          title: 'Cross-border desks',
          body: 'Vietnam trading companies often work in Chinese, English, and Vietnamese. The UI and documents ship in all three.',
        },
      ],
    },
    cards: {
      id: 'CAP-00',
      title: 'What we deliver now',
      featured: 'Lead offer',
      items: [
        {
          id: 'MAIL',
          title: 'Enterprise email',
          body: 'Self-hosted or operated for you. Multiple domains, anti-spam / anti-phishing, archive and search, hire provisioning and offboarding. Webmail plus standard clients. Live customer operations.',
        },
        {
          id: 'SEC',
          title: 'Data security',
          body: 'Backups that restore. Least privilege. Auditable actions. Endpoint hardening. Server hardening. Results only — we do not publish internals.',
        },
        {
          id: 'ERP',
          title: 'Trade inventory ERP',
          body: 'Purchasing, sales, stock, finance. Multi-tenant isolation. UI and documents in Chinese, English, and Vietnamese. Four steps: purchase → inbound → sales outbound → document settlement. For trading companies in Vietnam.',
          featured: true,
        },
      ],
    },
    capabilities: {
      id: 'CAP-01',
      intro: 'What follows is the scope we can actually ship. No lab diagrams, no invented customer metrics.',
      items: [
        {
          id: 'MAIL',
          title: 'Enterprise email',
          body: 'Mailboxes on the company’s own domains. Self-hosted or operated by Shengyuan, chosen on site. Live customers, ongoing operations — not a demo box.',
          rows: [
            { label: 'Deploy', detail: 'Self-hosted or operated for you, chosen on site' },
            { label: 'Domains', detail: 'Send and receive on multiple domains in one organisation' },
            { label: 'Filter', detail: 'Anti-spam / anti-phishing' },
            { label: 'Archive', detail: 'Archive and search; mail can be retrieved by query' },
            { label: 'Accounts', detail: 'Provision on hire, reclaim on leave' },
            { label: 'Clients', detail: 'Webmail plus standard mail clients' },
            { label: 'Ops', detail: 'Live customer line, ongoing operations' },
          ],
        },
        {
          id: 'SEC',
          title: 'Data security',
          body: 'Results only: backups that restore, access that can be tightened, actions that can be reviewed. Endpoints and servers hardened to a usable bar. We do not publish internals.',
          rows: [
            { label: 'Backup', detail: 'Backups that restore — not files left sitting unused' },
            { label: 'Access', detail: 'Least privilege, by role; nothing wide open by default' },
            { label: 'Audit', detail: 'Key actions are auditable after the fact' },
            { label: 'Endpoint', detail: 'Office endpoints hardened to a usable, holdable bar' },
            { label: 'Server', detail: 'Servers hardened to a usable, holdable bar' },
          ],
        },
        {
          id: 'ERP',
          title: 'Trade inventory ERP',
          body: 'Trade inventory for companies in Vietnam. Purchasing, sales, stock, and finance follow the documents. Multi-tenant isolation. UI and documents in Chinese, English, and Vietnamese. No production, BOM, or MES.',
          featured: true,
          flow: 'Purchase → Inbound → Sales outbound → Document settlement',
          note: 'Finance means AR/AP following the documents. We do not claim a full standalone finance suite.',
          modules: [
            { name: 'Purchasing', scope: 'Suppliers, purchase orders, inbound, reconciliation' },
            { name: 'Sales', scope: 'Customers, quotes, sales orders, outbound' },
            { name: 'Stock', scope: 'Warehouses, counts, transfers' },
            { name: 'Finance', scope: 'AR/AP follow the documents (not a full standalone finance suite)' },
            { name: 'Tenancy', scope: 'Data isolated between tenants' },
            { name: 'Language', scope: 'UI and documents in Chinese, English, and Vietnamese' },
          ],
          rows: [
            { label: 'Audience', detail: 'Trading companies in Vietnam; day-to-day SME inventory' },
            { label: 'Flow', detail: 'Purchase → inbound → sales outbound → document settlement' },
            { label: 'Scope', detail: 'Trade inventory. No production, BOM, or MES' },
            { label: 'Isolation', detail: 'Multi-tenant; each company keeps its own data' },
            { label: 'Language', detail: 'UI and documents: Chinese, English, Vietnamese' },
          ],
        },
      ],
    },
    scenarios: {
      id: 'SCN-01',
      intro: 'We start with work that happens every day. No invented company names, no case-study numbers.',
      items: [
        {
          title: 'Day-to-day inventory at trading firms',
          body: 'Goods in, goods out, and stock checks are daily work. Shengyuan keeps purchasing, sales, and stock in one inventory system, with finance following the documents instead of a second set of books. This is day-to-day work for trading companies in Vietnam, not a group-wide all-module suite. We do not name customers, and we do not invent throughput or turnover figures.',
          points: [
            'Purchase orders inbound to stock; suppliers can be reconciled',
            'Sales orders outbound; customers and quotes stay traceable',
            'Warehouses, counts, and transfers in one stock ledger',
            'AR/AP follow the documents — no standalone finance myth',
          ],
        },
        {
          title: 'Purchasing and stock in a factory office',
          body: 'A factory office needs purchase orders and a warehouse: who ordered, whether goods arrived, how much is still on hand. That is not the same layer as shop-floor process. This site does not list production as a public module. Align goods and books first. Shop-floor process is a separate discussion and is not in the public capability table.',
          points: [
            'Purchase orders, inbound, and put-away are daily office work',
            'Warehouse and counts have to match physical stock',
            'No production process, BOM, or MES coverage',
            'Shop-floor modules, if needed, are discussed in person — not promised here',
          ],
        },
        {
          title: 'Cross-border documents and languages',
          body: 'Vietnam trading companies often work in three languages: Chinese with domestic suppliers, English on outward quotes, Vietnamese on the floor. The UI and documents ship in all three, so teams spend less time translating and keeping parallel spreadsheets. Multi-tenant isolation keeps each company’s books apart. We do not mix customers in one database for a demo.',
          points: [
            'UI in Chinese, English, and Vietnamese',
            'Documents in all three, less back-and-forth translation',
            'Multi-tenant isolation between companies',
            'Built for a cross-border desk, not a single-language domestic shop',
          ],
        },
      ],
    },
    delivery: {
      id: 'DLV-01',
      intro: 'Open for delivery means we can put the system in your environment and leave people who can keep using it. Data stays on the customer side. We do not list prices on this site.',
      items: [
        {
          title: 'Private deployment',
          body: 'Installed on servers or a private network you name. Data stays on your side. We do not use customer business data as a public selling point. Hosting is discussed on site: your machine room, your cloud account, or a host you specify.',
        },
        {
          title: 'Role-based training',
          body: 'Walkthroughs by purchasing, sales, stock, and finance roles until staff can raise, find, and reconcile documents on their own. Not just a PDF manual.',
        },
        {
          title: 'After-sales',
          body: 'After go-live we can agree troubleshooting and small changes. Scope, response, and term are discussed in person or by mail — not frozen as a public package.',
        },
      ],
      note: 'No prices on this site. Write with your scenario, headcount, and a rough deployment environment so we can tell whether we can take it on.',
    },
    contact: {
      intro: 'Email is enough. Use a company address. Describe the scenario, headcount, and a rough deployment environment so we can tell whether we can take it on.',
      company: 'Company',
      mailLabel: 'Email',
      personLabel: 'Contact',
    },
    footer: {
      line: '盛源 · 锦升',
      note: 'Cabinet client projects are not listed as public products, and we do not link client homepages.',
    },
  },
  vi: {
    meta: {
      siteName: '盛源 · 锦升',
      homeTitle: '盛源 · 锦升 — Shengyuan · Cẩm Thăng',
      homeDesc: 'Hệ thống nghiệp vụ và hạ tầng an toàn mà SME triển khai được. Email doanh nghiệp và an toàn dữ liệu đã có khách đang chạy. ERP mua–bán–kho thương mại hiện mở giao.',
      capabilitiesTitle: 'Năng lực',
      capabilitiesDesc: 'Email doanh nghiệp, an toàn dữ liệu, ERP mua–bán–kho: phạm vi module và thông số, không phải ba đoạn ngắn.',
      scenariosTitle: 'Tình huống',
      scenariosDesc: 'Mua–bán–kho hàng ngày của công ty thương mại, văn phòng nhà máy, chứng từ xuyên biên giới và đa ngôn ngữ.',
      deliveryTitle: 'Bàn giao',
      deliveryDesc: 'Triển khai riêng, đào tạo theo vai trò, hậu mãi. Dữ liệu ở phía khách. Không niêm yết giá.',
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
    brandSub: '锦升',
    person: '钟锦升',
    email: 'jackiezhong1986@gmail.com',
    cta: 'Liên hệ 盛源',
    hero: {
      kicker: 'SY / 盛源 · 锦升',
      title: '盛源',
      sub: 'Hệ thống nghiệp vụ và hạ tầng an toàn mà doanh nghiệp vừa và nhỏ triển khai được',
      body: 'Email doanh nghiệp và an toàn dữ liệu đã có khách đang chạy. ERP mua–bán–kho thương mại hiện mở giao: mua hàng, bán hàng, tồn kho, tài chính; đa tenant; Trung / Anh / Việt; dành cho công ty thương mại tại Việt Nam.',
      chips: ['EMAIL', 'SECURITY', 'ERP'],
    },
    schematic: {
      id: 'FLOW-01',
      title: 'Bốn bước mua–bán–kho',
      steps: ['Mua hàng', 'Nhập kho', 'Xuất bán', 'Thanh toán theo chứng từ'],
    },
    about: {
      id: 'SY-01',
      title: '盛源 làm gì',
      items: [
        {
          kicker: '01',
          title: 'Làm hệ thống, không phải cửa hàng template',
          body: 'Chúng tôi là công ty làm hệ thống, không bán trang đổi vỏ. Email, an toàn và mua–bán–kho phải đặt được vào hiện trường và dùng được.',
        },
        {
          kicker: '02',
          title: 'Đã giao',
          body: 'Email doanh nghiệp: tự triển khai hoặc thuê vận hành, nhiều tên miền, chống thư rác, lưu trữ, mở và thu hồi hộp thư nhân viên. An toàn dữ liệu: sao lưu khôi phục được, phân quyền, kiểm toán, củng cố máy trạm và máy chủ. Khách hiện có, vận hành liên tục.',
        },
        {
          kicker: '03',
          title: 'Đang mở',
          body: 'ERP mua–bán–kho thương mại. Mua, bán, kho, tài chính đi theo chứng từ; cô lập đa tenant; giao diện và chứng từ Trung / Anh / Việt. Dành cho công ty thương mại tại Việt Nam.',
        },
        {
          kicker: '04',
          title: 'Ranh giới công khai',
          body: 'Không biến dự án tủ bếp của khách thành sản phẩm công khai, cũng không liên kết trang chủ khách. Trang này chỉ viết hệ thống do 盛源 tự giao.',
        },
      ],
    },
    audience: {
      id: 'WHO-01',
      title: 'Dành cho ai',
      items: [
        {
          title: 'Công ty thương mại',
          body: 'Mỗi ngày nhập, xuất, đối tồn. Mua, bán và kho cần nằm trong cùng một hệ thống, tài chính đi theo chứng từ.',
        },
        {
          title: 'Văn phòng nhà máy',
          body: 'Trước hết đơn mua và kho. Quy trình phân xưởng không phải module công khai trên website này.',
        },
        {
          title: 'Bàn xuyên biên giới',
          body: 'Công ty thương mại tại Việt Nam thường làm việc bằng tiếng Trung, Anh, Việt. Giao diện và chứng từ giao đủ ba ngôn ngữ.',
        },
      ],
    },
    cards: {
      id: 'CAP-00',
      title: 'Ba việc đang giao',
      featured: 'Trọng tâm',
      items: [
        {
          id: 'MAIL',
          title: 'Email doanh nghiệp',
          body: 'Tự triển khai hoặc thuê vận hành. Nhiều tên miền, chống thư rác / chống lừa đảo, lưu trữ và tìm kiếm, mở hộp thư khi vào làm và thu hồi khi nghỉ. Webmail kèm client chuẩn. Khách hiện có, vận hành liên tục.',
        },
        {
          id: 'SEC',
          title: 'An toàn dữ liệu',
          body: 'Sao lưu khôi phục được. Quyền tối thiểu. Thao tác kiểm toán được. Củng cố máy trạm. Củng cố máy chủ. Chỉ nói kết quả, không công bố bên trong.',
        },
        {
          id: 'ERP',
          title: 'ERP mua–bán–kho thương mại',
          body: 'Mua hàng, bán hàng, tồn kho, tài chính. Cô lập đa tenant. Giao diện và chứng từ Trung / Anh / Việt. Bốn bước: mua hàng → nhập kho → xuất bán → thanh toán theo chứng từ. Dành cho công ty thương mại tại Việt Nam.',
          featured: true,
        },
      ],
    },
    capabilities: {
      id: 'CAP-01',
      intro: 'Dưới đây là phạm vi giao được. Không phác thảo phòng thí nghiệm, không lấy số liệu khách bịa để làm cảnh.',
      items: [
        {
          id: 'MAIL',
          title: 'Email doanh nghiệp',
          body: 'Hộp thư trên tên miền của công ty. Tự triển khai hoặc 盛源 vận hành hộ, chọn tại hiện trường. Khách hiện có, vận hành liên tục — không phải môi trường demo.',
          rows: [
            { label: 'Triển khai', detail: 'Tự triển khai hoặc thuê vận hành, chọn tại hiện trường' },
            { label: 'Tên miền', detail: 'Gửi–nhận nhiều tên miền trong một tổ chức' },
            { label: 'Lọc', detail: 'Chống thư rác / chống lừa đảo' },
            { label: 'Lưu trữ', detail: 'Lưu trữ và tìm kiếm; thư truy xuất theo điều kiện' },
            { label: 'Tài khoản', detail: 'Mở hộp thư khi vào làm, thu hồi khi nghỉ' },
            { label: 'Client', detail: 'Webmail kèm client thư chuẩn' },
            { label: 'Vận hành', detail: 'Đường khách hiện có, vận hành liên tục' },
          ],
        },
        {
          id: 'SEC',
          title: 'An toàn dữ liệu',
          body: 'Chỉ nói kết quả: sao lưu khôi phục được, quyền siết được, thao tác tra được. Máy trạm và máy chủ củng cố tới mức dùng được. Không công bố bên trong.',
          rows: [
            { label: 'Sao lưu', detail: 'Sao lưu khôi phục được — không phải file để đó cho có' },
            { label: 'Quyền', detail: 'Quyền tối thiểu theo vai trò; không mặc định mở hết' },
            { label: 'Kiểm toán', detail: 'Thao tác then chốt kiểm toán được sau việc' },
            { label: 'Máy trạm', detail: 'Máy trạm văn phòng củng cố tới mức dùng được, giữ được' },
            { label: 'Máy chủ', detail: 'Máy chủ củng cố tới mức dùng được, giữ được' },
          ],
        },
        {
          id: 'ERP',
          title: 'ERP mua–bán–kho thương mại',
          body: 'Mua–bán–kho cho công ty thương mại tại Việt Nam. Mua, bán, kho, tài chính đi theo chứng từ. Cô lập đa tenant. Giao diện và chứng từ Trung / Anh / Việt. Không gồm sản xuất, BOM, MES.',
          featured: true,
          flow: 'Mua hàng → Nhập kho → Xuất bán → Thanh toán theo chứng từ',
          note: 'Tài chính là phải thu / phải trả đi theo chứng từ. Không tuyên bố bộ tài chính độc lập đầy đủ.',
          modules: [
            { name: 'Mua hàng', scope: 'Nhà cung cấp, đơn mua, nhập hàng, đối soát' },
            { name: 'Bán hàng', scope: 'Khách hàng, báo giá, đơn bán, xuất kho' },
            { name: 'Tồn kho', scope: 'Kho, kiểm kê, điều chuyển' },
            { name: 'Tài chính', scope: 'Phải thu / phải trả đi theo chứng từ (không phải bộ tài chính độc lập đầy đủ)' },
            { name: 'Đa tenant', scope: 'Dữ liệu tách giữa các tenant' },
            { name: 'Ngôn ngữ', scope: 'Giao diện và chứng từ Trung / Anh / Việt' },
          ],
          rows: [
            { label: 'Đối tượng', detail: 'Công ty thương mại tại Việt Nam; mua–bán–kho SME hàng ngày' },
            { label: 'Luồng', detail: 'Mua hàng → nhập kho → xuất bán → thanh toán theo chứng từ' },
            { label: 'Phạm vi', detail: 'Mua–bán–kho thương mại. Không gồm sản xuất, BOM, MES' },
            { label: 'Cô lập', detail: 'Đa tenant; mỗi công ty giữ dữ liệu riêng' },
            { label: 'Ngôn ngữ', detail: 'Giao diện và chứng từ: Trung, Anh, Việt' },
          ],
        },
      ],
    },
    scenarios: {
      id: 'SCN-01',
      intro: 'Bắt đầu từ việc xảy ra mỗi ngày. Không bịa tên khách, không lấy số liệu case study để làm cảnh.',
      items: [
        {
          title: 'Mua–bán–kho hàng ngày của công ty thương mại',
          body: 'Nhập, xuất và đối chiếu tồn là việc mỗi ngày. 盛源 để mua, bán và kho trong cùng một hệ thống, tài chính đi theo chứng từ chứ không mở thêm một sổ khác. Đây là việc hàng ngày của công ty thương mại tại Việt Nam, không phải bộ module cấp tập đoàn. Không viết tên khách, cũng không bịa số liệu vòng quay hay sản lượng.',
          points: [
            'Đơn mua nhập kho; nhà cung cấp đối soát được',
            'Đơn bán xuất kho; khách và báo giá lần ra được',
            'Kho, kiểm kê, điều chuyển trong cùng sổ tồn',
            'Phải thu / phải trả đi theo chứng từ — không thổi thành bộ tài chính độc lập',
          ],
        },
        {
          title: 'Mua hàng và tồn kho ở văn phòng nhà máy',
          body: 'Văn phòng nhà máy cần đơn mua và kho: ai đặt, hàng đã tới chưa, trong kho còn bao nhiêu. Đó không cùng lớp với quy trình phân xưởng. Website này không ghi sản xuất thành module công khai. Trước hết cho hàng và sổ khớp. Quy trình phân xưởng bàn riêng, không ghi vào bảng năng lực đối ngoại.',
          points: [
            'Đơn mua, nhập hàng, vào kho là việc văn phòng đụng mỗi ngày',
            'Kho và kiểm kê phải khớp hiện vật',
            'Không phủ quy trình sản xuất, BOM, MES',
            'Module phân xưởng nếu cần thì trao đổi trực tiếp — không hứa trên website',
          ],
        },
        {
          title: 'Chứng từ xuyên biên giới và đa ngôn ngữ',
          body: 'Công ty thương mại tại Việt Nam thường làm việc bằng ba ngôn ngữ: tiếng Trung với nhà cung cấp trong nước, tiếng Anh khi báo giá ra ngoài, tiếng Việt khi thao tác tại chỗ. Giao diện và chứng từ giao đủ ba ngôn ngữ, bớt dịch đi dịch lại và bớt bảng tính song song. Đa tenant tách dữ liệu từng công ty. Không trộn khách trong một cơ sở dữ liệu để trình diễn.',
          points: [
            'Giao diện Trung / Anh / Việt',
            'Chứng từ ba ngôn ngữ, bớt dịch đi dịch lại',
            'Đa tenant, dữ liệu công ty tách nhau',
            'Cho bàn xuyên biên giới, không chỉ nội thương một ngôn ngữ',
          ],
        },
      ],
    },
    delivery: {
      id: 'DLV-01',
      intro: 'Mở giao nghĩa là đưa hệ thống vào môi trường của bạn và để lại người dùng được tiếp. Dữ liệu ở phía khách. Giá không niêm yết trên website.',
      items: [
        {
          title: 'Triển khai riêng',
          body: 'Cài trên máy chủ hoặc mạng nội bộ do khách chỉ định. Dữ liệu ở phía khách. Không lấy dữ liệu nghiệp vụ khách làm điểm bán công khai. Cách đặt máy bàn tại hiện trường: phòng máy của bạn, tài khoản mây của bạn, hoặc máy chủ bạn chỉ định.',
        },
        {
          title: 'Đào tạo theo vai trò',
          body: 'Theo vai trò mua, bán, kho, tài chính, hướng dẫn tới khi tự mở chứng từ, tìm chứng từ và đối soát được. Không chỉ một bản hướng dẫn.',
        },
        {
          title: 'Hậu mãi',
          body: 'Sau khi chạy, có thể hẹn xử lý sự cố và chỉnh nhỏ. Phạm vi, cách phản hồi và thời hạn trao đổi trực tiếp — không đóng băng thành gói trên website.',
        },
      ],
      note: 'Không niêm yết giá. Hãy viết thư nêu tình huống, số người và môi trường triển khai khoảng, để chúng tôi biết có nhận được không.',
    },
    contact: {
      intro: 'Gửi thư là đủ. Dùng hộp thư công ty, nêu tình huống, số người và môi trường triển khai khoảng, để chúng tôi biết có nhận được không.',
      company: 'Công ty',
      mailLabel: 'Thư',
      personLabel: 'Người liên hệ',
    },
    footer: {
      line: '盛源 · 锦升',
      note: 'Không biến dự án tủ bếp của khách thành sản phẩm công khai, cũng không liên kết trang chủ khách.',
    },
  },
};

export function t(locale: Locale): Copy {
  return ui[locale] ?? ui.zh;
}
