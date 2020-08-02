import { ButtonComponent } from './button.component';

export default {
  title: 'UiButton',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello UiButton',
  },
});

export const Disabled = () => ({
  component: ButtonComponent,
  props: {
    text: 'Disabled UiButton',
    disabled: true
  },
});

