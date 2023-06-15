import type * as core from '@mcaptcha/core-glue'
import { ConfigurationError } from '@mcaptcha/core-glue'

/** Name and ID of the input field in which token will be rendered */
export const INPUT_NAME = 'mcaptcha__token'
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/modules.html#SiteKey) */
export type SiteKey = core.SiteKey
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/modules.html#WidgetConfig) */
export type WidgetConfig = core.WidgetConfig
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/classes/ConfigurationError.html) */
export { ConfigurationError }
