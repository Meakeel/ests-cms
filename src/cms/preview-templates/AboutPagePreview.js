import React from 'react'
import PropTypes from 'prop-types'
import { SteelPageTemplate } from '../../templates/about-page'

const SteelPagePreview = ({ entry, widgetFor }) => (
  <SteelPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SteelPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SteelPagePreview
