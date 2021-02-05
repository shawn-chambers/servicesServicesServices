import React from 'react';
import Ratings from 'react-ratings-declarative';

const StarAverage = ({ average, size }) => {

  if (!average) return null;

  return (
    <span className='star-rating'>
      <div style={{position: 'absolute'}}>
        <Ratings
          svgIconPaths='M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955    C511.56,208.649,513.033,202.688,511.267,197.258z'
          svgIconViewBoxes='0 0 512.001 512.001'
          widgetDimensions={size}
          widgetSpacings='1px'
          widgetHoverColors='blue'
          rating={Number(average)}
        >
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
        </Ratings>
      </div>
      <Ratings
          svgIconPaths="M511.266,197.256c-1.764-5.431-6.458-9.388-12.108-10.209l-158.722-23.065L269.452,20.155    c-2.527-5.12-7.741-8.361-13.451-8.361c-5.709,0-10.924,3.242-13.451,8.361l-70.988,143.828L12.843,187.047    c-5.65,0.821-10.344,4.779-12.108,10.209c-1.765,5.43-0.293,11.391,3.795,15.376l114.848,111.955L92.27,482.67    c-0.965,5.627,1.349,11.315,5.968,14.67c4.618,3.355,10.74,3.798,15.797,1.142L256,423.846l141.961,74.637    c2.195,1.154,4.591,1.723,6.979,1.723c3.11,0,6.206-0.966,8.818-2.865c4.619-3.356,6.933-9.043,5.968-14.671L392.61,324.587    l114.86-111.954C511.559,208.647,513.031,202.686,511.266,197.256z M366.023,308.608c-3.536,3.446-5.15,8.412-4.314,13.278    l23.311,135.898l-122.038-64.162c-4.37-2.297-9.591-2.297-13.961,0l-122.045,64.163l23.304-135.9    c0.834-4.866-0.779-9.83-4.313-13.276l-98.731-96.244l136.445-19.829c4.886-0.71,9.108-3.778,11.294-8.205L256,60.685    l61.023,123.645c2.186,4.427,6.408,7.496,11.294,8.206l136.447,19.828L366.023,308.608z"
          svgIconViewBoxes='0 0 512.001 512.001'
          widgetDimensions={size}
          widgetSpacings='1px'
          widgetHoverColors='blue'
          rating={5}
        >
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
          <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white' />
        </Ratings>
    </span>
  );

}

export default StarAverage;