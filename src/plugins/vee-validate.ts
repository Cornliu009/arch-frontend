import { required, max, min, email } from 'vee-validate/dist/rules';

import { extend } from 'vee-validate';
import { localizeValidations } from '@/plugins/vee-validate.localize';

extend('required', required);

extend('max', max);

extend('min', min);

extend('email', email);

localizeValidations();
