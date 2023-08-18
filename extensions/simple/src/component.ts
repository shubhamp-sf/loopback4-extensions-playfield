import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import {SimpleComponentBindings} from './keys'
import {DEFAULT_SIMPLE_OPTIONS, SimpleComponentOptions} from './types';

// Configure the binding for SimpleComponent
@injectable({tags: {[ContextTags.KEY]: SimpleComponentBindings.COMPONENT}})
export class SimpleComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: SimpleComponentOptions = DEFAULT_SIMPLE_OPTIONS,
  ) {}
}
