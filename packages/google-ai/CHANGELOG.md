# @voltagent/google-ai

## 0.3.8

### Patch Changes

- [#122](https://github.com/VoltAgent/voltagent/pull/122) [`de83eaf`](https://github.com/VoltAgent/voltagent/commit/de83eaf76af5b88fb4303ff60fd8af36369fda63) Thanks [@luixaviles](https://github.com/luixaviles)! - feat(google-ai): include tool calls and results in generateText response

  Fixes #115

## 0.3.7

### Patch Changes

- [`3fdef67`](https://github.com/VoltAgent/voltagent/commit/3fdef675bfac9d227592805f337396eae15f03ca) Thanks [@omeraplak](https://github.com/omeraplak)! - chore: only the `dist` directory is included in the published npm package.

## 0.3.6

### Patch Changes

- [#109](https://github.com/VoltAgent/voltagent/pull/109) [`5589efd`](https://github.com/VoltAgent/voltagent/commit/5589efd25d16f6bb226f2735ffa457e38fe079ab) Thanks [@luixaviles](https://github.com/luixaviles)! - feat(google-ai): enchance streamText with function call handling

- Updated dependencies [[`0a120f4`](https://github.com/VoltAgent/voltagent/commit/0a120f4bf1b71575a4b6c67c94104633c58e1410)]:
  - @voltagent/core@0.1.18

## 0.3.4

### Patch Changes

- [#102](https://github.com/VoltAgent/voltagent/pull/102) [`cdfec65`](https://github.com/VoltAgent/voltagent/commit/cdfec657f731fdc1b6d0c307376e3299813f55d3) Thanks [@omeraplak](https://github.com/omeraplak)! - refactor: use 'instructions' field for Agent definitions in examples - #88

  Updated documentation examples (READMEs, docs, blogs) and relevant package code examples to use the `instructions` field instead of `description` when defining `Agent` instances.

  This change aligns the examples with the preferred API usage for the `Agent` class, where `instructions` provides behavioral guidance to the agent/LLM. This prepares for the eventual deprecation of the `description` field specifically for `Agent` class definitions.

  **Example Change for Agent Definition:**

  ```diff
    const agent = new Agent({
      name: "My Assistant",
  -   description: "A helpful assistant.",
  +   instructions: "A helpful assistant.",
      llm: new VercelAIProvider(),
      model: openai("gpt-4o-mini"),
    });
  ```

- Updated dependencies [[`cdfec65`](https://github.com/VoltAgent/voltagent/commit/cdfec657f731fdc1b6d0c307376e3299813f55d3)]:
  - @voltagent/core@0.1.14

## 0.3.3

### Patch Changes

- [#99](https://github.com/VoltAgent/voltagent/pull/99) [`82c1066`](https://github.com/VoltAgent/voltagent/commit/82c1066462456aa71bb9427cfd46d061235088d5) Thanks [@luixaviles](https://github.com/luixaviles)! - feat(google-ai): add function calling support for Google SDK integration

- [`13db262`](https://github.com/VoltAgent/voltagent/commit/13db2621ae6b730667f9991d3c2129c85265e925) Thanks [@omeraplak](https://github.com/omeraplak)! - fix: Update Zod to version 3.24.2 to resolve "Type instantiation is excessively deep and possibly infinite" error (related to https://github.com/colinhacks/zod/issues/3435).

- Updated dependencies [[`f7de864`](https://github.com/VoltAgent/voltagent/commit/f7de864503d598cf7131cc01afa3779639190107), [`13db262`](https://github.com/VoltAgent/voltagent/commit/13db2621ae6b730667f9991d3c2129c85265e925)]:
  - @voltagent/core@0.1.13

## 0.3.2

### Patch Changes

- [`340feee`](https://github.com/VoltAgent/voltagent/commit/340feee1162e74c52def337af8f35d8d3117eefc) Thanks [@omeraplak](https://github.com/omeraplak)! - fix: Add index signature `[key: string]: any;` to `GoogleProviderRuntimeOptions`. This allows passing arbitrary extra options to the Google AI provider, alongside refactoring types to prevent TypeScript deep instantiation errors.

- Updated dependencies [[`e5b3a46`](https://github.com/VoltAgent/voltagent/commit/e5b3a46e2e61f366fa3c67f9a37d4e4d9e0fe426), [`4649c3c`](https://github.com/VoltAgent/voltagent/commit/4649c3ccb9e56a7fcabfe6a0bcef2383ff6506ef), [`8e6d2e9`](https://github.com/VoltAgent/voltagent/commit/8e6d2e994398c1a727d4afea39d5e34ffc4a5fca)]:
  - @voltagent/core@0.1.11

## 0.3.1

### Patch Changes

- [#77](https://github.com/VoltAgent/voltagent/pull/77) [`beaa8fb`](https://github.com/VoltAgent/voltagent/commit/beaa8fb1f1bc6351f1bede0b65a6a189cc1b6ea2) Thanks [@omeraplak](https://github.com/omeraplak)! - **API & Providers:** Standardized message content format for array inputs.

  - The API (`/text`, `/stream`, `/object`, `/stream-object` endpoints) now strictly expects the `content` field within message objects (when `input` is an array) to be either a `string` or an `Array` of content parts (e.g., `[{ type: 'text', text: '...' }]`).
  - The previous behavior of allowing a single content object (e.g., `{ type: 'text', ... }`) directly as the value for `content` in message arrays is no longer supported in the API schema. Raw string inputs remain unchanged.
  - Provider logic (`google-ai`, `groq-ai`, `xsai`) updated to align with this stricter definition.

  **Console:**

  - **Added file and image upload functionality to the Assistant Chat.** Users can now attach multiple files/images via a button, preview attachments, and send them along with text messages.
  - Improved the Assistant Chat resizing: Replaced size toggle buttons with a draggable handle (top-left corner).
  - Chat window dimensions are now saved to local storage and restored on reload.

  **Internal:**

  - Added comprehensive test suites for Groq and XsAI providers.

- Updated dependencies [[`beaa8fb`](https://github.com/VoltAgent/voltagent/commit/beaa8fb1f1bc6351f1bede0b65a6a189cc1b6ea2)]:
  - @voltagent/core@0.1.10

## 0.3.0

### Minor Changes

- [#52](https://github.com/VoltAgent/voltagent/pull/52) [`96f2395`](https://github.com/VoltAgent/voltagent/commit/96f239548a207d8cf34694999129980a7998f6e1) Thanks [@foxy17](https://github.com/foxy17)! - feat: Add `generateObject` method for structured JSON output via Zod schemas and Google's JSON mode.
  feat: Add support for reading the Google GenAI API key from the `GEMINI_API_KEY` environment variable as a fallback.

### Patch Changes

- Updated dependencies [[`55c58b0`](https://github.com/VoltAgent/voltagent/commit/55c58b0da12dd94a3095aad4bc74c90757c98db4), [`d40cb14`](https://github.com/VoltAgent/voltagent/commit/d40cb14860a5abe8771e0b91200d10f522c62881), [`e88cb12`](https://github.com/VoltAgent/voltagent/commit/e88cb1249c4189ced9e245069bed5eab71cdd894), [`0651d35`](https://github.com/VoltAgent/voltagent/commit/0651d35442cda32b6057f8b7daf7fd8655a9a2a4)]:
  - @voltagent/core@0.1.8

## 0.2.0

### Minor Changes

- [#29](https://github.com/VoltAgent/voltagent/pull/29) [`82e27c2`](https://github.com/VoltAgent/voltagent/commit/82e27c2bcd19fbf476d7812b91df3ab399a03357) Thanks [@foxy17](https://github.com/foxy17)! - feat(google-ai): Add initial Google AI provider package - #12

  Introduces the `@voltagent/google-ai` package to integrate Google's Generative AI capabilities directly into VoltAgent. This allows developers to leverage powerful models like Gemini within their agents.

  This initial version includes:

  - The core `GoogleGenAIProvider` class for interfacing with the `@google/genai` SDK.
  - Configuration options for API key authentication.
  - Basic setup and usage examples in the README.
  - Documentation outlining future support and considerations for Vertex AI.

### Patch Changes

- Updated dependencies [[`52d5fa9`](https://github.com/VoltAgent/voltagent/commit/52d5fa94045481dc43dc260a40b701606190585c), [`3ef2eaa`](https://github.com/VoltAgent/voltagent/commit/3ef2eaa9661e8ecfebf17af56b09af41285d0ca9), [`52d5fa9`](https://github.com/VoltAgent/voltagent/commit/52d5fa94045481dc43dc260a40b701606190585c)]:
  - @voltagent/core@0.1.6
