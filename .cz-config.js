module.exports = {
    types: [
        { value: "feat", name: "đ¸ feat:     A new feature" },
        { value: "fix", name: "đ fix:      A bug fix" },
        { value: "wip", name: "đ¯ wip:      Work in progress" },
        { value: "chore", name: "đ¤ chore:    Build process or auxiliary tool change" },
        { value: "refactor", name: "đĄ refactor: A code change that neither fixes a bug or adds a feature" },
        { value: "style", name: "đ style:    Markup, white-space, formatting, missing semi-colons..." },
        { value: "test", name: "đ test:     Adding missing tests" },
        { value: "perf", name: "đĒ perf:     A code change that improves performance" },
        { value: "docs", name: "âī¸ docs:     Documentation only changes" },
        { value: "ci", name: "đšī¸ ci:      CI related changes" },
        { value: "revert", name: "đĨ revert:   Revert to a commit" },
    ],
    allowCustomScopes: true,
    skipQuestions: ["footer"],
    allowBreakingChanges: ["feat", "fix", "revert", "refactor"],
};