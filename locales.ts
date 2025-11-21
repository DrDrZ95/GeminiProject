
export const translations = {
  en: {
    newChat: "New chat",
    newGroup: "New Group",
    recent: "Recent",
    groups: "Groups",
    user: "User",
    proPlan: "Pro Plan",
    grokIntroTitle: "Agent",
    grokIntroDesc: "I am Agent, your intelligent assistant for coding, work automation, and terminal operations.",
    askAnything: "Ask anything...",
    disclaimer: "Agent may make mistakes. Please verify sensitive information.",
    copy: "Copy",
    copied: "Copied",
    terminalTitle: "Linux Terminal • Remote",
    openTerminal: "Open Terminal",
    modelKimi: "Long Context (200k)",
    modelDeepseek: "Deep Reasoning",
    modelGptOss: "Open Source",
    languageName: "English",
    systemInstruction: "You are Agent, a highly advanced AI assistant. You are helpful, precise, and can see the user's terminal environment. When showing code, use markdown code blocks. Keep responses concise but informative.",
    
    // Context Menu & Groups
    rename: "Rename",
    delete: "Delete",
    emailChat: "Email Chat",
    moveToGroup: "Move to Group",
    removeFromGroup: "Remove from Group",
    createGroup: "Create Group",
    groupNamePlaceholder: "Group Name",
    untitledGroup: "Untitled Group",
    groupLimitReached: "Group limit reached (max 10)",
    confirmDelete: "Are you sure you want to delete this?",
    deleteGroupWarning: "Deleting a group will move its chats to Recent.",
    ungrouped: "Ungrouped",

    // User Menu
    upgradeSubscription: "Upgrade Subscription",
    account: "Account",
    getHelp: "Get Help",
    settings: "Settings",
    signOut: "Sign Out",

    // Input Modes
    modeGeneral: "General",
    modeWorkReport: "Work Progress Report",
    modeOA: "OA Workflow",
    modeProject: "Project Assistance",
    modeCompany: "About the Company",

    // Placeholders
    placeholderGeneral: "Ask anything...",
    placeholderWorkReport: "You can: Help me send today's work content to the employee system",
    placeholderOA: "You can: Guide me through the reimbursement or leave application process",
    placeholderProject: "You can: Create a timeline or manage tasks for the upcoming sprint",
    placeholderCompany: "You can: Ask about company culture, history, or department structure"
  },
  zh: {
    newChat: "新对话",
    newGroup: "新建分组",
    recent: "最近",
    groups: "分组",
    user: "用户",
    proPlan: "专业版",
    grokIntroTitle: "Agent",
    grokIntroDesc: "我是 Agent，您的智能助手，致力于代码编写、工作自动化和终端操作。",
    askAnything: "问点什么...",
    disclaimer: "Agent 可能会犯错。请核实敏感信息。",
    copy: "复制",
    copied: "已复制",
    terminalTitle: "Linux 终端 • 远程",
    openTerminal: "打开终端",
    modelKimi: "超长上下文 (200k)",
    modelDeepseek: "深度推理模型",
    modelGptOss: "开源模型",
    languageName: "中文",
    systemInstruction: "你是 Agent，一个高度先进的人工智能助手。你乐于助人、精准，并且可以看到用户的终端环境。在显示代码时，使用 markdown 代码块。保持回答简洁但信息丰富。",

    // Context Menu & Groups
    rename: "重命名",
    delete: "删除",
    emailChat: "邮件发送",
    moveToGroup: "移动到分组",
    removeFromGroup: "移出分组",
    createGroup: "创建分组",
    groupNamePlaceholder: "分组名称",
    untitledGroup: "未命名分组",
    groupLimitReached: "分组数量已达上限 (10)",
    confirmDelete: "确定要删除吗？",
    deleteGroupWarning: "删除分组后，对话将移动到“最近”列表。",
    ungrouped: "未分组",

    // User Menu
    upgradeSubscription: "升级订阅",
    account: "账户",
    getHelp: "获取帮助",
    settings: "设置",
    signOut: "退出登录",

    // Input Modes
    modeGeneral: "通用模式",
    modeWorkReport: "工作进度汇报",
    modeOA: "OA 工作流",
    modeProject: "项目协助",
    modeCompany: "关于公司",

    // Placeholders
    placeholderGeneral: "问点什么...",
    placeholderWorkReport: "您可以：帮我把今天的工作内容发送到员工系统",
    placeholderOA: "您可以：引导我完成报销或请假申请流程",
    placeholderProject: "您可以：为即将到来的冲刺创建时间表或管理任务",
    placeholderCompany: "您可以：询问关于公司文化、历史或部门结构的信息"
  }
};

export type Language = keyof typeof translations;
