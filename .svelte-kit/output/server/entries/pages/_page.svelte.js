import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, d as escape_attribute_value, e as escape_object, f as add_attribute, v as validate_component, h as escape, j as compute_slots, k as each, i as subscribe } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { i as is_void } from "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { twMerge } from "tailwind-merge";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "size", "href", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus:ring-gray-200 dark:focus:ring-gray-700",
    blue: "focus:ring-blue-300 dark:focus:ring-blue-800",
    dark: "focus:ring-gray-300 dark:focus:ring-gray-700",
    green: "focus:ring-green-300 dark:focus:ring-green-800",
    light: "focus:ring-gray-200 dark:focus:ring-gray-700",
    primary: "focus:ring-primary-300 dark:focus:ring-primary-800",
    purple: "focus:ring-purple-300 dark:focus:ring-purple-900",
    red: "focus:ring-red-300 dark:focus:ring-red-900",
    yellow: "focus:ring-yellow-300 dark:focus:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "border-l-0 first:border-l",
    group ? pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        },
        {
          role: escape_attribute_value(href ? "button" : void 0)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")} `;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $messageStore, $$unsubscribe_messageStore;
  let selected;
  let models = [
    {
      value: "openai/gpt-3.5-turbo",
      name: "OpenRouter/OpenAI: GPT-3.5 Turbo"
    },
    {
      value: "openai/gpt-3.5-16k",
      name: "OpenRouter/OpenAI: GPT-3.5 Turbo 16k"
    },
    {
      value: "openai/gpt-4",
      name: "OpenRouter/OpenAI: GPT-4"
    },
    {
      value: "openai/gpt-4-32k",
      name: "OpenRouter/OpenAI: GPT-4 32k"
    },
    {
      value: "anthropic/claude-2",
      name: "OpenRouter/Anthropic: Claude v2"
    },
    {
      value: "anthropic/claude-instant-v1",
      name: "OpenRouter/Anthropic: Claude Instant v1"
    },
    {
      value: "google/palm-2-chat-bison",
      name: "OpenRouter/Google: PaLM 2 Bison"
    },
    {
      value: "OpenAI/gpt-3.5-turbo",
      name: "OpenAI/GPT-3.5 Turbo"
    },
    {
      value: "OpenAI/gpt-3.5-16k",
      name: "OpenAI/GPT-3.5 Turbo 16k"
    },
    {
      value: "OpenAI/gpt-4",
      name: "OpenAI/GPT-4"
    },
    {
      value: "OpenAI/gpt-4-32k",
      name: "OpenAI/GPT-4 32k"
    }
  ];
  let ApiKey = "";
  let queryLink = "";
  let patToken = "";
  let messageStore = writable("");
  $$unsubscribe_messageStore = subscribe(messageStore, (value) => $messageStore = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form>${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Select a model:
        ${validate_component(Select, "Select").$$render(
          $$result,
          {
            class: "mt-2",
            items: models,
            required: true,
            value: selected
          },
          {
            value: ($$value) => {
              selected = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} <div>${validate_component(Label, "Label").$$render($$result, { for: "ApiKey", class: "mb-2" }, {}, {
      default: () => {
        return `Api Key:`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "ApiKey",
        placeholder: "ApiKey:",
        required: true,
        value: ApiKey
      },
      {
        value: ($$value) => {
          ApiKey = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "queryLink", class: "mb-2" }, {}, {
      default: () => {
        return `Query Link:`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "queryLink",
        placeholder: "Query Link",
        required: true,
        value: queryLink
      },
      {
        value: ($$value) => {
          queryLink = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "patToken", class: "mb-2" }, {}, {
      default: () => {
        return `PAT Token:`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "patToken",
        placeholder: "PAT Token",
        required: true,
        value: patToken
      },
      {
        value: ($$value) => {
          patToken = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <br>  ${validate_component(Button, "Button").$$render($$result, { variant: "secondary" }, {}, {
      default: () => {
        return `Download Changelog`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { variant: "secondary" }, {}, {
      default: () => {
        return `View Raw Changelog`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", variant: "primary" }, {}, {
      default: () => {
        return `Generate Changelog`;
      }
    })}</form> ${$messageStore ? ` <div>${validate_component(Label, "Label").$$render($$result, { class: "text-2xl font-bold" }, {}, {
      default: () => {
        return `Changelog:`;
      }
    })} <br> ${each($messageStore.split("\n"), (line) => {
      return `${validate_component(Label, "Label").$$render($$result, { class: "mb-2" }, {}, {
        default: () => {
          return `${escape(line)}`;
        }
      })} <br>`;
    })}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_messageStore();
  return $$rendered;
});
export {
  Page as default
};
