import {BindingKey, CoreBindings} from '@loopback/core';
import {SimpleComponent} from './component';

/**
 * Binding keys used by this component.
 */
export namespace SimpleComponentBindings {
  export const COMPONENT = BindingKey.create<SimpleComponent>(
    `${CoreBindings.COMPONENTS}.SimpleComponent`,
  );
}
