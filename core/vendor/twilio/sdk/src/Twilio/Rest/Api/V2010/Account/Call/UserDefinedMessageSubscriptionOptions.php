<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Api\V2010\Account\Call;

use Twilio\Options;
use Twilio\Values;

abstract class UserDefinedMessageSubscriptionOptions {
    /**
     * @param string $idempotencyKey A unique string value to identify API call.
     *                               This should be a unique string value per API
     *                               call and can be a randomly generated.
     * @param string $method HTTP method used with the callback.
     * @return CreateUserDefinedMessageSubscriptionOptions Options builder
     */
    public static function create(string $idempotencyKey = Values::NONE, string $method = Values::NONE): CreateUserDefinedMessageSubscriptionOptions {
        return new CreateUserDefinedMessageSubscriptionOptions($idempotencyKey, $method);
    }
}

class CreateUserDefinedMessageSubscriptionOptions extends Options {
    /**
     * @param string $idempotencyKey A unique string value to identify API call.
     *                               This should be a unique string value per API
     *                               call and can be a randomly generated.
     * @param string $method HTTP method used with the callback.
     */
    public function __construct(string $idempotencyKey = Values::NONE, string $method = Values::NONE) {
        $this->options['idempotencyKey'] = $idempotencyKey;
        $this->options['method'] = $method;
    }

    /**
     * A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
     *
     * @param string $idempotencyKey A unique string value to identify API call.
     *                               This should be a unique string value per API
     *                               call and can be a randomly generated.
     * @return $this Fluent Builder
     */
    public function setIdempotencyKey(string $idempotencyKey): self {
        $this->options['idempotencyKey'] = $idempotencyKey;
        return $this;
    }

    /**
     * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. Default is `POST`.
     *
     * @param string $method HTTP method used with the callback.
     * @return $this Fluent Builder
     */
    public function setMethod(string $method): self {
        $this->options['method'] = $method;
        return $this;
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString(): string {
        $options = \http_build_query(Values::of($this->options), '', ' ');
        return '[Twilio.Api.V2010.CreateUserDefinedMessageSubscriptionOptions ' . $options . ']';
    }
}