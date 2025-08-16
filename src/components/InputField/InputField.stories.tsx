import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InputField } from "./InputField";
import type { InputFieldProps } from "./InputField";


const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof InputField>;

// Controlled wrapper
const Controlled = (props: InputFieldProps) => {
  const [val, setVal] = useState(props.value ?? "");
  return (
    <div className="max-w-sm">
      <InputField {...props} value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export const Default: Story = {
  render: () => <Controlled label="Username" placeholder="Enter username" helperText="Helper text" />,
};

export const Error: Story = {
  render: () => <Controlled label="Email" invalid errorMessage="Invalid email" />,
};

export const Password: Story = {
  render: () => <Controlled label="Password" type="password" placeholder="••••••" />,
};

export const Loading: Story = {
  render: () => <Controlled label="Loading input" loading />,
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Controlled label="Filled" variant="filled" />
      <Controlled label="Outlined" variant="outlined" />
      <Controlled label="Ghost" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Controlled label="Small" size="sm" />
      <Controlled label="Medium" size="md" />
      <Controlled label="Large" size="lg" />
    </div>
  ),
};
