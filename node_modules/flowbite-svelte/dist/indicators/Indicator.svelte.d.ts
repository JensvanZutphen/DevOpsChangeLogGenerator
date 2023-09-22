import { SvelteComponentTyped } from "svelte";
import type { PlacementType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "blue" | "dark" | "orange" | "none" | "teal" | undefined;
        rounded?: boolean | undefined;
        size?: "xs" | "sm" | "lg" | "xl" | "md" | undefined;
        border?: boolean | undefined;
        placement?: PlacementType | undefined;
        offset?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IndicatorProps = typeof __propDef.props;
export type IndicatorEvents = typeof __propDef.events;
export type IndicatorSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Indicators](https://flowbite-svelte.com/docs/components/indicators)
 * - Setup
 * - Default indicator
 * - Legend indicator
 * - Indicator count
 * - Status indicator
 * - Badge indicator
 * - Stepper indicator
 * - Indicator position
 * ## Props
 * @prop color: IndicatorColorType = 'gray';
 * @prop rounded: boolean = false;
 * @prop size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
 * @prop border: boolean = false;
 * @prop placement: IndicatorPlacementType = undefined;
 * @prop offset: boolean = true;
 * ## Example
 * ```
 * <script>
 *   import { Indicator } from 'flowbite-svelte'
 * </script>
 *
 * <Indicator color="gray"/>
 * <Indicator color="dark"/>
 * <Indicator color="blue"/>
 * ```
 */
export default class Indicator extends SvelteComponentTyped<IndicatorProps, IndicatorEvents, IndicatorSlots> {
}
export {};
//# sourceMappingURL=Indicator.svelte.d.ts.map