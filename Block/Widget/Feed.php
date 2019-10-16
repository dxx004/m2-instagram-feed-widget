<?php

namespace RVSolutions\InstagramFeed\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;
use Magento\Framework\Serialize\Serializer\Json;
use Magento\Widget\Block\BlockInterface;

/**
 * Feed class to be used in template
 */
class Feed extends Template implements BlockInterface
{
    /**
     * @var string
     */
    protected $_template = "widget/feed.phtml";

    /**
     * @var Json
     */
    private $json;

    /**
     * @param Context $context
     * @param Json $json
     * @param array $data
     */
    public function __construct(
        Context $context,
        Json $json,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->json = $json;
    }

    /**
     * Get JSON data
     *
     * @return bool|false|string
     */
    public function getJsonData()
    {
        $data = $this->getData();
        return $this->json->serialize([
            'username' => $data['username'] ?? '',
            'tag' => $data['tag'] ?? '',
            'display_profile' => (bool)$data['display_profile'] ?? true,
            'display_biography' => (bool)$data['display_biography'] ?? true,
            'display_gallery' => (bool)$data['display_gallery'] ?? true,
            'styling' => (bool)$data['styling'] ?? true,
            'display_igtv' => (bool)$data['display_igtv'] ?? true,
            'max_items' => $data['max_items'] ?? 6,
            'items_per_row' => $data['items_per_row'] ?? 6,
        ]);
    }

    /**
     * Get HTML element ID
     *
     * @return string
     */
    public function getElementId()
    {
        return 'ig_feed_' . sha1(microtime());
    }
}
