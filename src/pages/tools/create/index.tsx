import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { toolValidationSchema } from 'validationSchema/tools';
import { OutletInterface } from 'interfaces/outlet';
import { ToolInterface } from 'interfaces/tool';

function ToolCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ToolInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.tool.create({ data: values as RoqTypes.tool });
      resetForm();
      router.push('/tools');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ToolInterface>({
    initialValues: {
      name: '',
      type: '',
      brand: '',
      model: '',
      price_per_day: 0,
      outlet_id: (router.query.outlet_id as string) ?? null,
    },
    validationSchema: toolValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Tools',
              link: '/tools',
            },
            {
              label: 'Create Tool',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Tool
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.type}
            label={'Type'}
            props={{
              name: 'type',
              placeholder: 'Type',
              value: formik.values?.type,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.brand}
            label={'Brand'}
            props={{
              name: 'brand',
              placeholder: 'Brand',
              value: formik.values?.brand,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.model}
            label={'Model'}
            props={{
              name: 'model',
              placeholder: 'Model',
              value: formik.values?.model,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Price Per Day"
            formControlProps={{
              id: 'price_per_day',
              isInvalid: !!formik.errors?.price_per_day,
            }}
            name="price_per_day"
            error={formik.errors?.price_per_day}
            value={formik.values?.price_per_day}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('price_per_day', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<OutletInterface>
            formik={formik}
            name={'outlet_id'}
            label={'Select Outlet'}
            placeholder={'Select Outlet'}
            fetcher={() => roqClient.outlet.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/tools')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'tool',
    operation: AccessOperationEnum.CREATE,
  }),
)(ToolCreatePage);
