class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    p bench_params

    if @bench.save
      render json: @bench
    else
      render json: @bench.errors
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
