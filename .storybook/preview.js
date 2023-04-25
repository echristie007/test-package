import './preview.less';

const initialTheme = sessionStorage.getItem('theme') || 'cg00';
const setTheme = (theme) => (
    sessionStorage.setItem('theme', theme), (document.documentElement.dataset.theme = theme)
);

export const parameters = {
    controls: { expanded: true, hideNoControlsWarning: true },
    options: {
        storySort: {
            order: ['Welcome', 'Components'],
        },
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Preview theme',
        defaultValue: initialTheme,
        toolbar: {
            icon: 'photo',
            items: [
                { value: 'white', title: 'White' },
                { value: 'cg00', title: 'Cool Gray 00' },
                { value: 'yg100', title: 'Cyan Gray 100' },
                { value: 'g100', title: 'Gray 100' },
            ],
        },
    },
};

export const decorators = [
    (Story, { globals: { theme } }) => (
        setTheme(theme),
        (
            <div>
                <Story />
            </div>
        )
    ),
];
