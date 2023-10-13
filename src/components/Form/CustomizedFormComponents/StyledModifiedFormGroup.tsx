import { styled } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';

// This is how we pass around custom props
type StyledModifiedFormGroupProps = {
  paddingtop?: number;
};

// Note: When using the skipSx: attribute we are basically locking down the ability to customize the styled form group
export const StyledModifiedFormGroup = styled(FormGroup, {
  name: 'StyledModifiedFormGroup',
  slot: 'Wrapper',
  skipSx: true,
})<StyledModifiedFormGroupProps>((props) => ({
  padding: props.theme.spacing(2),
  paddingtop: props.paddingtop,
  justifyContent: 'space-between',
}));
