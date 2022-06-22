/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"],
    theme: {
        colors: {
            'fg-base--default': 'var(--fg-base--default)',
            'fg-base--muted': 'var(--fg-base--muted)',
            'fg-base--contrast': 'var(--fg-base--contrast)',
            'fg-base--indistinguishable': 'var(--fg-base--indistinguishable)',
            'fg-role--accent-01': 'var(--fg-role--accent-01)',
            'fg-role--accent-02': 'var(--fg-role--accent-02)',
            'fg-role--success': 'var(--fg-role--success)',
            'fg-role--error': 'var(--fg-role--error)',
            'fg-role--active': 'var(--fg-role--active)',
            'bg-base--default': 'var(--bg-base--default)',
            'bg-base--subtle': 'var(--bg-base--subtle)',
            'bg-base--mutedDefault': 'var(--bg-base--mutedDefault)',
            'bg-base--mutedBlue': 'var(--bg-base--mutedBlue)',
            'bg-base--indistinguishable': 'var(--bg-base--indistinguishable)',
            'bg-base--contrast': 'var(--bg-base--contrast)',
            'bg-transparent--blue--02': 'var(--bg-transparent--blue--02)',
            'bg-transparent--blue--05': 'var(--bg-transparent--blue--05)',
            'bg-role--building': 'var(--bg-role--building)',
            'bg-role--success': 'var(--bg-role--success)',
            'bg-role--error': 'var(--bg-role--error)',
            'bg-role--syncing': 'var(--bg-role--syncing)',
            'bg-role--info': 'var(--bg-role--info)',
            'bg-role--notice': 'var(--bg-role--notice)',
            'bg-role--warning': 'var(--bg-role--warning)',
            'bg-trans--accentPink': 'var(--bg-trans--accentPink)',
            'border-color-base--default': 'var(--border-color-base--default)',
            'border-color-base--muted': 'var(--border-color-base--muted)',
            'border-color-base--subtle': 'var(--border-color-base--subtle)',
            'border-color-base--contrast': 'var(--border-color-base--contrast)',
            'border-color-base--accentPurple': 'var(--border-color-base--accentPurple)',
            'border-color-role--blue': 'var(--border-color-role--blue)',
        }
    },
    plugins: [],
};
