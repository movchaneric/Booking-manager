import Heading from "../components/Heading";
import FormRow from "../components/FormRow";
import styled from "styled-components";
import Form from "../components/Form";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import useSettings from "../features/settings/useSettings";
import { useUpdateSettings } from "../features/settings/useUpdateSettings";

const Settings = () => {
  const { settings, isLoading } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();

  function handleUpdateSettings(event, field) {
    const { value } = event.target;
    updateSettings({ value, field });
  }

  const isWorking = isLoading || isUpdating;

  if (isWorking) return <Spinner />;
  return (
    <StyledSettings>
      <Heading as="h1">Update settings</Heading>

      <Form>
        <FormRow label="Minimum nights/booking">
          <Input
            defaultValue={settings.minBookingLen}
            type="number"
            disabled={isUpdating}
            onBlur={(event) => handleUpdateSettings(event, "minBookingLen")}
          />
        </FormRow>
        <FormRow label="Maximum nights/booking">
          <Input
            defaultValue={settings.maxBookingLen}
            type="number"
            disabled={isUpdating}
            onBlur={(event) => handleUpdateSettings(event, "maxBookingLen")}
          />
        </FormRow>
        <FormRow label="Maximum guests/booking">
          <Input
            defaultValue={settings.maxGuestsPerBooking}
            type="number"
            disabled={isUpdating}
            onBlur={(event) =>
              handleUpdateSettings(event, "maxGuestsPerBooking")
            }
          />
        </FormRow>
        <FormRow label="Breakfast price">
          <Input
            defaultValue={settings.breakfastPrice}
            type="number"
            disabled={isUpdating}
            onBlur={(event) => handleUpdateSettings(event, "breakfastPrice")}
          />
        </FormRow>
      </Form>
    </StyledSettings>
  );
};

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default Settings;
